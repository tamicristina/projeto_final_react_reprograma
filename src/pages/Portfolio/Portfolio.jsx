import { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import image from "../../assets/header_image.svg";
import projetos from "./portfolioList";
import axios from "axios";
import "./portfolio.css";

function Portfolio() {
  const [repositorios, setRepositorios] = useState([]);
  const baseURL = "https://api.github.com/users/tamicristina/repos";

  useEffect(() => {
    axios.get(baseURL).then((response) => setRepositorios(response.data));
  }, []);
  return (
    <>
      <Header image={image} description="ilustracao mulher com site">
        Meus Projetos
      </Header>
      <div className="container_geral_projetos">
        <div className="projetos_container">
          {projetos.map((projeto) => {
            return (
              <span className="container-cards" key={projeto.id}>
                <h1 className="titulo_card">{projeto.nome}</h1>
                <img className="card_img" src={projeto.imagem} />
                <a className="ancora_card" href={projeto.link} target="blank">
                  Link para o repositório
                </a>
              </span>
            );
          })}
        </div>
      </div>
      <div className="container_geral_repositorios">
        {repositorios.map((repositorio) => {
          return (
            <span key={repositorio.id} className="cards_repos">
              <h1>{repositorio.name}</h1>
              <a
                className="ancora_card_repositorios"
                href={repositorio.svn_url}
                target="blank"
              >
                Link para o repositório
              </a>
            </span>
          );
        })}
      </div>
    </>
  );
}
export default Portfolio;
