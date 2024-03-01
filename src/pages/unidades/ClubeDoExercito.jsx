import styled from "styled-components";
import CarrosselEstrutura from "../../components/CarrosselEstrutura";
import { Car, ShowerHead, UtensilsCrossed, Wifi } from "lucide-react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ImageContainer = styled.div`
  width: 100vw;
  height: 490px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 64px;
`;

const Mapa = styled.iframe`
  width: 100vw;
  height: 500px;
  border: none;
  outline: none;
`;

const InformacoesContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 32px;
  margin: 64px 0;
  @media screen and (min-width: 768px) {
    padding: 0 360px;
  }
`;

const UnidadeOferece = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 32px;
  margin: 64px 0;
  @media screen and (min-width: 768px) {
    padding: 0 360px;
  }
`;

const IconsContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin: 8px 0;
  text-align: left;
`;

const ClubeDoExercito = () => {
  const fotos = [
    "/smu/estrutura/estrutura_smu.jpeg",
    "/smu/estrutura/estrutura_smu1.jpeg",
    "/smu/estrutura/estrutura_smu2.jpeg",
    "/smu/estrutura/estrutura_smu3.jpeg",
    "/smu/estrutura/estrutura_smu4.jpeg",
  ];
  return (
    <Container>
      <ImageContainer
        style={{ backgroundImage: `url("/smu/capa_smu.jpeg")` }}
      />
      <CarrosselEstrutura unidade="smu" fotos={fotos} />
      <UnidadeOferece>
        <h2>A unidade oferece:</h2>
        <IconsContainer>
          <Wifi size={40} strokeWidth={3} />
          <p>Wifi gratuito</p>
        </IconsContainer>
        <IconsContainer>
          <ShowerHead size={40} />
          <p>Vestiário masculino e feminino</p>
        </IconsContainer>
        <IconsContainer>
          <Car size={40} />
          <p>Estacionamento amplo, gratuito e seguro</p>
        </IconsContainer>
        <IconsContainer>
          <UtensilsCrossed size={40} />
          <p>Restaurante, aberto das 8h às 18h.</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/rapida.svg" alt="" />
          <p>1 Quadra Rápida</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/saibro.svg" alt="" />
          <p>1 Quadra Saibro</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/paredao.svg" alt="" />
          <p>1 Paredão</p>
        </IconsContainer>
      </UnidadeOferece>
      <InformacoesContainer>
        <h1>CLUBE DO EXÉRCITO - SMU</h1>
        <p>
          Endereço: Av. Duque de Caxias SMU, s/n – Clube do Exército <br />
          Estado: Distrito Federal <br />
          Cidade: Brasília <br />
          Bairro: Setor Militar Urbano
          <br />
          CEP: 70.630-000
          <br />
          Telefone: (61) 98465 0881
          <br />
          Horário de Atendimento: de segunda a sexta de 07h às 21h – sábado 08h
          à 12h
          <br />
        </p>
      </InformacoesContainer>
      <Mapa
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15358.242914169929!2d-47.925587!3d-15.7743605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a309f182d8e2f%3A0xbceff4bc58a52314!2sClube%20do%20Ex%C3%A9rcito%20-%20SMU!5e0!3m2!1spt-BR!2sbr!4v1708895052828!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Mapa>
    </Container>
  );
};

export default ClubeDoExercito;
