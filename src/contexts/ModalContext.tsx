import { createContext, ReactNode, useContext, useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "../components/NewTransactionModal";

interface ModalContextData {
  isNewTransactionModalOpen: boolean;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as ModalContextData);

Modal.setAppElement("#root");

export function ModalProvider({ children }: ModalProviderProps) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
      }}
    >
      {/* <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>DEMO</h2>
      </Modal> */}

      <NewTransactionModal />
      {children}
    </ModalContext.Provider>
  );
}

export const UseModal = (): ModalContextData => useContext(ModalContext);
