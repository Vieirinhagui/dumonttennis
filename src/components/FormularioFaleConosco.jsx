import styled from "styled-components";
const FaleConosco = styled.div`
  background-color: #ffcc2b;
  padding: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: center;
  & h1 {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    padding: 64px;
  }
`;
const FormContainer = styled.div`
  background-color: #ffcc2b;
  border-radius: 20px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  @media screen and (min-width: 768px) {
    padding: 32px;
    width: 70%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 10px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`;

const Select = styled.select`
  background-color: white;
  color: black;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  margin-bottom: 16px;
  option {
    color: black;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 12px;
`;

const BotaoSubmitForm = styled.button`
  width: 120px;
  height: 40px;
  font-size: 20px;
  background-color: black;
  color: #ffcc2b;
  border: none;
  outline: none;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const FormularioFaleConosco = () => {
  return (
    <FaleConosco>
      <h1>FALE CONOSCO</h1>
      <FormContainer>
        <h3>Preencha o formulário abaixo.</h3>
        <div>
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu melhor email" />{" "}
          <Input type="tel" placeholder="Digite seu telefone" />{" "}
          <Select>
            <option value="default">Selecione a unidade de interesse</option>
            <option value="smu">Clube do Exército- SMU</option>
            <option value="iate">Iate Clube de Brasília</option>
            <option value="assefaz">Clube Olímpico Assefaz</option>
            <option value="lagoSul">Unidade Lago Sul</option>
          </Select>
          <TextArea placeholder="Digite sua mensagem" />
        </div>
        <BotaoSubmitForm>ENVIAR</BotaoSubmitForm>
      </FormContainer>
    </FaleConosco>
  );
};

export default FormularioFaleConosco;
