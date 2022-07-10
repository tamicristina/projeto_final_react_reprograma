import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import Portfolio from "../pages/Portfolio/Portfolio";
import Comentarios from "../pages/Comentarios/Comentarios";
import Menu from "../componentes/Menu/Menu";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* passamos só a / pois será a página home */}
        <Route path="/" element={<Sobre />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="comentarios" element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;
