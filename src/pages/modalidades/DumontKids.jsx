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
const DumontKids = () => {
  return (
    <Container>
      <div>
        <Title>DUMONT KIDS</Title>
        <p>
          A Dumont Kids oferece uma abordagem única para iniciar as crianças no
          tênis. Com aulas divertidas e adaptadas, desenvolvemos habilidades
          físicas, mentais e emocionais, ensinando os fundamentos do esporte e
          promovendo a coordenação, concentração e trabalho em equipe.
          <br />
          <br />
          Com instrutores experientes, enfatizam a progressão gradual e valores
          como disciplina, respeito e determinação. Preparamos as crianças não
          apenas para o tênis, mas também para os desafios da vida. Junte-se a
          nós para uma experiência enriquecedora e inspiradora, que constrói um
          futuro promissor dentro e fora das quadras de tênis. Venha fazer parte
          desta jornada!
        </p>
      </div>
    </Container>
  );
};

export default DumontKids;
