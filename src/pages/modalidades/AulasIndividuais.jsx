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
  font-size: 30px;
`;
const AulasIndividuais = () => {
  return (
    <Container>
      <div>
        <Title>AULAS INDIVIDUAIS</Title>
        <p>
          Oferecemos aulas em diversas unidades: Iate Clube, Clube do Exército
          (Setor Militar Urbano - SMU), Lago Sul e Clube Olímpico Assefaz. As
          aulas incluem aquecimento, alongamento, técnica, alimentação e jogos.
          Elas ocorrem de segunda a sexta, das 7h às 21h, e aos sábados das 8h
          às 12h, com duração de 1 hora, sendo disponíveis turmas a cada hora.
        </p>
      </div>
    </Container>
  );
};

export default AulasIndividuais;
