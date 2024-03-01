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
const AulasGrupo = () => {
  return (
    <Container>
      <div>
        <Title>AULAS EM GRUPO</Title>
        <p>
          Oferecemos aulas em grupo em várias unidades: Iate Clube, Clube do
          Exército (SMU), Lago Sul e Clube Olímpico Assefaz, com até 4 alunos
          por turma e para todas as idades. As aulas abrangem aquecimento,
          alongamento, técnica, alimentação e jogos. Elas ocorrem de segunda a
          sexta, das 7h às 21h, e aos sábados das 8h às 12h, com duração de 1
          hora e turmas a cada hora.
        </p>
      </div>
    </Container>
  );
};

export default AulasGrupo;
