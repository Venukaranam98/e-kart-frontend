import { create } from "zustand";
import { API_BASE_URL } from "../../../lib/apiClient";

export const useAuthStore = create((set, get) => ({
  token: localStorage.getItem("access_token") || null,
  user: null,
  isAuthenticated: false,
  isLoading: !!localStorage.getItem("access_token"),
  isInitialized: false,

  setToken: (token) => {
    if (token) {
      localStorage.setItem("access_token", token);
      set({ token, isAuthenticated: true });
    } else {
      localStorage.removeItem("access_token");
      set({ token: null, user: null, isAuthenticated: false });
    }
  },

  setUser: (user) => {
    set({ user, isAuthenticated: !!user });
  },

  login: (token, user = null) => {
    if (token) {
      localStorage.setItem("access_token", token);
      set({
        token,
        user,
        isAuthenticated: true,
        isLoading: false,
        isInitialized: true,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("access_token");
    set({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: true,
    });
  },

  checkAuth: async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      set({
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isInitialized: true,
      });
      return false;
    }

    set({ isLoading: true });

    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Token is invalid, expired, or user not found
        localStorage.removeItem("access_token");
        set({
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
          isInitialized: true,
        });
        return false;
      }

      const result = await response.json();
      const userData = result?.data || result;

      set({
        token,
        user: userData,
        isAuthenticated: true,
        isLoading: false,
        isInitialized: true,
      });
      return true;
    } catch (error) {
      console.error("[Auth Check Error]:", error);
      // In case of error (network failure, etc.), if token exists we treat as unverified
      // If 401 was received response.ok handled it above.
      // If network is down, we don't wipe token immediately if offline, but cannot confirm auth
      set({
        isLoading: false,
        isInitialized: true,
      });
      return get().isAuthenticated;
    }
  },
}));

// Listen for global 401 unauthorized events from apiClient or other fetchers
if (typeof window !== "undefined") {
  window.addEventListener("auth:unauthorized", () => {
    useAuthStore.getState().logout();
  });

  // Keep tabs in sync if user logs out or modifies token elsewhere
  window.addEventListener("storage", (event) => {
    if (event.key === "access_token") {
      if (!event.newValue) {
        useAuthStore.getState().logout();
      } else {
        useAuthStore.getState().checkAuth();
      }
    }
  });
}

