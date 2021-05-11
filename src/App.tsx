import { TransactionsProvider } from "./contexts/TransactionsContext";
import { ModalProvider } from "./contexts/ModalContext";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <TransactionsProvider>
        <ModalProvider>
          <Header />
          <Dashboard />
        </ModalProvider>
      </TransactionsProvider>
      <GlobalStyle />
    </>
  );
}
