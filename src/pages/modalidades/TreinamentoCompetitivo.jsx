import styled from "styled-components";

const TreinamentoContainer = styled.div`
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

const TreinamentoCompetitivo = () => {
  return (
    <TreinamentoContainer>
      <div>
        <Title>EQUIPE</Title>
        <p>
          Jovens que estão jogando torneios estaduais, nacionais e
          internacionais.CARGA HORÁRIA: Três horas e meia diárias. De 3 à 5
          vezes por semana, sob orientação técnica. 30 minutos de aquecimento;2
          horas de quadra;1 hora de preparação física. A Clínica de treinamento
          conta com:Preparador Físico;Parcerias com psicólogo, nutricionista e
          fisioterapeuta;Planejamento de calendário para torneios;Acompanhamento
          em torneios;Quadras de saibro, piso rápido e quadras cobertas. Os
          treinamentos acontecem de segunda à sexta das 14h00 às 18h
        </p>
      </div>
      <div>
        <Title>PRÉ-EQUIPE</Title>
        <p>
          Jovens que estão começando a treinar de forma competitiva com objetivo
          de começar a jogar torneios.CARGA HORÁRIA: De 1(uma) à 2(duas) horas
          diárias, de 2 à 5 vezes por semana de acordo com a idade e
          desenvolvimento, sob avaliação técnica.
        </p>
      </div>
      <div>
        <Title>Tenis Universitário</Title>
        <p>
          O tênis abre muitos caminhos para os atletas, além da busca para se
          tornar profissional muitos jogadores consegume bolsas de estudos em
          universidades em outros países através do esporte, assim eles podem
          garantir os estudos com a oportunidade de continuar jogando.
        </p>
      </div>
      <div>
        <Title>PRÉ-TEMPORADA</Title>
        <p>
          A pré-temporada acontece sempre nos meses de julho, dezembro e
          janeiro, nesses meses os atletas estão de férias podendo assim
          intensificar os trabalhos, treinando dois períodos para se preparar
          para o semestre e para o ano. Recebemos atletas de vários estados e de
          outros países.
        </p>
      </div>
    </TreinamentoContainer>
  );
};

export default TreinamentoCompetitivo;
