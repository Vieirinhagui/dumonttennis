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
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 490px;
  }
`;
const Mapa = styled.iframe`
  width: 100vw;
  height: 500px;
  margin-top: 32px;
  border: none;
  outline: none;
`;

const InformacoesContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 32px;
  margin: 16px 0;
  @media screen and (min-width: 768px) {
    padding: 0 360px;
  }
`;

const UnidadeOferece = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 32px;
  margin: 16px 0;
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

const LagoSul = () => {
  const fotos = [
    "/lagosul/estrutura/estrutura_lago2.jpeg",
    "/lagosul/estrutura/estrutura_lago3.jpeg",
    "/lagosul/estrutura/estrutura_lago1.jpeg",
    "/lagosul/estrutura/estrutura_lago4.jpeg",
    "/lagosul/estrutura/estrutura_lago5.jpeg",
    "/lagosul/estrutura/estrutura_lago6.jpeg",
    "/lagosul/estrutura/estrutura_lago.jpeg",
    "/lagosul/estrutura/estrutura_lago7.jpeg",
    "/lagosul/estrutura/estrutura_lago8.jpeg",
  ];
  return (
    <Container>
      <ImageContainer
        style={{
          backgroundImage: `url("/lagosul/estrutura/estrutura_lago4.jpeg")`,
        }}
      />
      <CarrosselEstrutura unidade="iate" fotos={fotos} />
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
          <img src="/icons/saibro.svg" alt="" />
          <p>2 Quadra Saibro</p>
        </IconsContainer>
        <IconsContainer>
          <img src="/icons/paredao.svg" alt="" />
          <p>2 Quadra de Beach Tênnis</p>
        </IconsContainer>
      </UnidadeOferece>
      <InformacoesContainer>
        <h1>UNIDADE LAGO SUL</h1>
        <p>
          Endereço: St. de Habitações Individuais Sul QI 23 <br />
          Estado: Distrito Federal <br />
          Cidade: Brasília <br />
          Bairro: Lago Sul
          <br />
          Telefone: (61) 99138 6671 | (61) 3366-3338 | (61) 99258-3009
          <br />
          Horário de Atendimento: de segunda a sexta de 07h às 22h - sábado 08h
          à 12h
          <br />
        </p>
      </InformacoesContainer>
      <Mapa
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141.0875172837154!2d-47.847861688301165!3d-15.848950817981672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a247e83fa3def%3A0x1937c8d91a8a9df4!2sArmando%20Cirillo%20Club%20Care!5e0!3m2!1spt-BR!2sbr!4v1708998721817!5m2!1spt-BR!2sbr"
        https:allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Mapa>
    </Container>
  );
};

export default LagoSul;
