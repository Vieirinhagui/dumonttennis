import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormularioFaleConosco from "../components/FormularioFaleConosco";
import WhatsappFlutuante from "../components/WhatsappFlutuante";

const WrapperContainer = styled.div`
  width: 100vw;
  background-color: #ffcc2b;
  overflow-x: hidden;
`;

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <WhatsappFlutuante />
      <WrapperContainer>{children}</WrapperContainer>
      <FormularioFaleConosco />
      <Footer />
    </div>
  );
};

export default Layout;
