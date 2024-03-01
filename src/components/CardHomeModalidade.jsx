/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalidadeCard = styled(Link)`
  width: 100vw;
  height: 300px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: calc(100vw / 4);
    height: 450px;
  }
`;

const ImageModalidadeCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* para cobrir toda a área do contêiner */
`;

const TextModalidadeCard = styled.p`
  position: absolute;
  bottom: 35%;
  font-size: 30px;
  text-shadow: 1px 1px 17px rgba(0, 0, 0, 1);
  font-weight: bold;
  color: white;
  z-index: 1; 
  @media screen and (min-width:768px){
    bottom: 45%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* preto com 30% de opacidade */
  z-index: 0; /* Garante que a sobreposição fique atrás da imagem */
`;

const CardHomeModalidade = ({ title, subtitle, imagem, path }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ModalidadeCard to={path} onClick={scrollToTop}>
      <ImageModalidadeCard src={imagem} alt="" />
      <Overlay />
      <TextModalidadeCard>
        {title} <br /> {subtitle}
      </TextModalidadeCard>
    </ModalidadeCard>
  );
};

export default CardHomeModalidade;
