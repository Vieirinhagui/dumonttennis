import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 32px;
  @media screen and (min-width: 768px) {
    padding: 64px 256px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
`;
const BeachTenis = () => {
  return (
    <Container>
      <div>
        <Title>BEACH TENNIS</Title>
        <p>
          Oferecemos aulas de Beach Tennis em grupo no Lago Sul e no Clube
          Olímpico Assefaz, com turmas de até 6 pessoas, incluindo escolinha
          para crianças. As aulas trazem uma abordagem de alguns itens básicos
          como aquecimento, alongamento, técnica, alimentação e jogos, adequadas
          para todas as idades. 
        </p>
      </div>
    </Container>
  );
};

export default BeachTenis;
