import React from "react";
import styled from "styled-components";

const BotaoContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

const Botao = styled.button`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffcb22;
  padding: 8px 16px;
  font-size: 26px;
  border: none;
  outline: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffcb22;
    border: 2px solid black;
    color: black;
    transition: .7s;
  }
`;

const TextoMenor = styled.span`
  font-size: 16px;
  font-weight: regular;
`;
const TextoMaior = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const BotaoAvaliacao = () => {
  return (
    <BotaoContainer>
      <Botao>
        <TextoMenor>Clique para</TextoMenor>
        <br />
        <TextoMaior>MARCAR SUA AVALIAÇÃO</TextoMaior>
      </Botao>
    </BotaoContainer>
  );
};

export default BotaoAvaliacao;
