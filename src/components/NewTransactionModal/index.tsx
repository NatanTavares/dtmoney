import Modal from "react-modal";
import { UseModal } from "../../contexts/ModalContext";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

export function NewTransactionModal() {
  const { isNewTransactionModalOpen, handleCloseNewTransactionModal } =
    UseModal();

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container action="">
        <h2>Cadastrar transação</h2>

        <input name="title" placeholder="Título" />
        <input type="number" name="amount" placeholder="Preço" />

        <div>
          <button>Entrada</button>
          <button>Saída</button>
        </div>

        <input name="category" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
