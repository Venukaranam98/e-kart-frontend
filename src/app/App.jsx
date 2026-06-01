import AppRouter from "./AppRouter";
import Providers from "./Providers";
import Header from "../shared/components/Header";
import CartDrawer from "../shared/components/CartDrawer";
import { Global } from "@emotion/react";
import { globalCss } from "./GlobalStyles.styles";

export default function App() {
  return (
    <Providers>
      <Global styles={globalCss} />
      <Header />
      <AppRouter />
      <CartDrawer />
    </Providers>
  );
}