import styled from "styled-components";
import CardUnidades from "../components/CardUnidades";

const Cards = styled.div`
  width: 100%;
  padding: 64px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 64px;
  }
`;

const Unidades = () => {
  return (
    <Cards>
      <CardUnidades
        contato="(61) 98465-0881"
        image="/smu/unidade_smu.jpeg"
        label="CLUBE DO EXÉRCITO DO SETOR DO MILITAR URBANO"
        treinamento={false}
        beach={false}
        individual={true}
        unidade="smu"
      />
      <CardUnidades
        label="IATE CLUBE DE BRASÍLIA"
        contato="(61) 98127-0990"
        image="/iate/iate.jpg"
        treinamento={true}
        beach={false}
        individual={true}
        unidade="iate"
      />
      <CardUnidades
        label="CLUBE OLÍMPICO ASSEFAZ"
        contato="(61) 99258-2411"
        image="/assefaz/assefaz.jpg"
        treinamento={false}
        beach={true}
        individual={true}
        unidade="assefaz"
      />
      <CardUnidades
        label="LAGO SUL"
        contato="(61) 99258-3009"
        image="/lagosul/lagosul.jpg"
        treinamento={false}
        beach={false}
        individual={false}
        unidade="lagosul"
      />
    </Cards>
  );
};

export default Unidades;
