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
  font-size: 26px;
`;
const AulasIndividuais = () => {
  return (
    <Container>
      <div>
        <Title>AULAS INDIVIDUAIS</Title>
        <p>
          Para aqueles que buscam aprender ou aprimorar de forma personalizada,
          os treinos são planejados de acordo com as necessidades ou interesses
          do aluno, iniciante ou avançado na aula individual o aluno pode
          treinar detalhes específicos.
        </p>
      </div>
    </Container>
  );
};

export default AulasIndividuais;
