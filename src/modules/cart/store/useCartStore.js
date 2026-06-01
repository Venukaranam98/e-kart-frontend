import { create } from "zustand";

export const useCartStore = create((set) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));
