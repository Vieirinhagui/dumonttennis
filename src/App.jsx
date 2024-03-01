import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Escola from "./pages/Escola.jsx";
import AulasGrupo from "./pages/modalidades/AulasGrupo";
import AulasIndividuais from "./pages/modalidades/AulasIndividuais";
import BeachTenis from "./pages/modalidades/BeachTenis";
import TreinamentoCompetitivo from "./pages/modalidades/TreinamentoCompetitivo";
import Assefaz from "./pages/unidades/Assefaz";
import LagoSul from "./pages/unidades/LagoSul";
import Iate from "./pages/unidades/Iate";
import Layout from "./pages/Layout.jsx";
import DumontKids from "./pages/modalidades/DumontKids.jsx";
import Unidades from "./pages/Unidades";
import ClubeDoExercito from "./pages/unidades/ClubeDoExercito.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/escola"
            element={
              <Layout>
                <Escola />
              </Layout>
            }
          />
          <Route
            path="/fotos"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contato"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/dumontkids"
            element={
              <Layout>
                <DumontKids />
              </Layout>
            }
          />
          <Route
            path="/aulasemgrupo"
            element={
              <Layout>
                <AulasGrupo />
              </Layout>
            }
          />
          <Route
            path="/aulasindividuais"
            element={
              <Layout>
                <AulasIndividuais />
              </Layout>
            }
          />
          <Route
            path="/beachtenis"
            element={
              <Layout>
                <BeachTenis />
              </Layout>
            }
          />
          <Route
            path="/treinamento"
            element={
              <Layout>
                <TreinamentoCompetitivo />
              </Layout>
            }
          />
          <Route
            path="/unidades"
            element={
              <Layout>
                <Unidades />
              </Layout>
            }
          />
          <Route
            path="/unidade/assefaz"
            element={
              <Layout>
                <Assefaz />
              </Layout>
            }
          />
          <Route
            path="/unidade/smu"
            element={
              <Layout>
                <ClubeDoExercito />
              </Layout>
            }
          />
          <Route
            path="/unidade/lagosul"
            element={
              <Layout>
                <LagoSul />
              </Layout>
            }
          />
          <Route
            path="/unidade/iate"
            element={
              <Layout>
                <Iate />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
