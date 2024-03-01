import styled from "styled-components";

const SobreContainer = styled.div`
  background-color: #ffcc2b;
  padding: 128px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: left;
  & img {
    width: 80vw;
  }
  & p {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    background-color: #ffcc2b;
    padding: 128px 32px;
    & img {
      width: auto;
    }
    & p {
      width: 60%;
    }
  }
`;
const TextSobre = styled.p`
  color: black;
  width: 60%;
`;

const Logo = styled.img`
  width: 1000px;
`;

const Escola = () => {
  return (
    <SobreContainer>
      <Logo src="/logos/logo_preta.png" alt="" />
      <TextSobre>
        A Dumont Tênnis é uma escola renomada em Brasília, com mais de 25 anos
        de experiência em treinamento competitivo. Unidades no oferecemos a
        oportunidade de conhecer, aprender e se divertir com Tênis. Nossa
        metodologia de ensino é baseada na co-descoberta, onde os alunos
        aprendem gradualmente através de aulas dinâmicas e interativas com
        nossos professores capacitados. Queremos proporcionar uma experiência
        esportiva de qualidade, promovendo o desenvolvimento pessoal e social
        dos nossos alunos dentro e fora das quadras.
      </TextSobre>
    </SobreContainer>
  );
};

export default Escola;
