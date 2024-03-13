import React from "react";
import styled from "styled-components";
import BotaoAvaliacao from "../../components/BotaoAvaliacao";
const ModalidadeContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 32px;
`;
export const Title = styled.h1`
  font-size: 24px;
`;

export const InfosContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 32px;
  gap: 8px;
  @media screen and (min-width: 768px) {
    padding: 0 512px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`;

const ModalidadesLayout = ({ children, title, pathCapa }) => {
  return (
    <ModalidadeContainer>
      {pathCapa && (
        <ImageContainer
          style={{
            backgroundImage: `url(${pathCapa})`,
          }}
        />
      )}
      <InfosContainer>
        <Title>{title}</Title>
      </InfosContainer>
      {children}
      {/* <BotaoAvaliacao /> */}
    </ModalidadeContainer>
  );
};

export default ModalidadesLayout;
