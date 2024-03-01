import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 630px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background-color: black;
  color: #ffcc2b;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 600px;
    height: 340px;
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: black;
    gap: 16px;
    color: #ffcc2b;
    border-radius: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 20px 20px 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const InfosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  li {
    list-style: none;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
const UnidadeContainer = styled.div`
  width: 100%;
`;
const StyledP = styled.p`
  font-size: 14px;
`;

const LinkButton = styled(Link)`
  width: 120px;
  height: 40px;
  background-color: #ffcc2b;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 10px;
  &:hover {
    border: 2px solid #ffcc2b;
    background-color: black;
    color: #ffcc2b;
    transition: 0.5s;
  }
`;
const TelefoneStyled = styled.h4`
  font-size: 18px;
  @media screen and (min-width: 768px) {
  }
`;
// eslint-disable-next-line react/prop-types
const CardUnidades = ({
  label,
  contato,
  unidade,
  treinamento,
  individual,
  beach,
  image,
}) => {
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${image})` }} />
      <InfoContainer>
        <UnidadeContainer>
          <StyledP>UNIDADE</StyledP>
          <h4>{label}</h4>
        </UnidadeContainer>
        <InfosContainer>
          <div>
            <StyledP>MODALIDADES</StyledP>
            <ul>
              {treinamento && <li>-Treinamento Competitivo</li>}
              <li>-Aulas em grupo</li>
              <li>-Dumont Kids</li>
              {individual && <li>-Aulas Individuais</li>}
              {beach && <li>-Beach Tênnis</li>}
            </ul>
          </div>
          <div>
            <StyledP>CONTATO</StyledP>
            <TelefoneStyled>{contato}</TelefoneStyled>
          </div>
        </InfosContainer>
        <LinkButton to={`/unidade/${unidade}`}>DETALHES</LinkButton>
      </InfoContainer>
    </CardContainer>
  );
};

export default CardUnidades;
