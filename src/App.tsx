import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalProvider } from "./contexts/ModalContext";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ModalProvider>
        <Header />
        <Dashboard />
        <GlobalStyle />
      </ModalProvider>
    </>
  );
}
