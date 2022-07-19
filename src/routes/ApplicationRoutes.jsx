import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import Portfolio from "../pages/Portfolio/Portfolio";
import Comentarios from "../pages/Comentarios/Comentarios";
import Menu from "../componentes/Menu/Menu";
import Contato from "../pages/Contato/Contato";
import Footer from "../componentes/Footer/Footer";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* passamos só a / pois será a página home */}
        <Route path="/" element={<Sobre />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="comentarios" element={<Comentarios />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
