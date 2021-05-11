import logoImg from "../../assets/logo.svg";
import { UseModal } from "../../contexts/ModalContext";
import { Container, Content } from "./styles";

export function Header() {
  const { handleOpenNewTransactionModal } = UseModal();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
