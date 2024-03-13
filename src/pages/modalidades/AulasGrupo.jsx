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
const AulasGrupo = () => {
  return (
    <Container>
      <div>
        <Title>AULAS EM GRUPO</Title>
        <p>
          As aulas em grupo são montadas de acordo com nível de desenvolvimento,
          são dinâmicas pois as turmas possuem até 4 pessoas, com duração de uma
          hora abrangem aquecimento, técnica, tática, alimentação e jogos. Sendo
          uma excelente opção para além de treinar e desenvolver tecnicamente
          jogando com pessoas do mesmo nível, socializar, fazer novas amizades e
          possibilidades marcar jogos além das aulas.
        </p>
      </div>
    </Container>
  );
};

export default AulasGrupo;
