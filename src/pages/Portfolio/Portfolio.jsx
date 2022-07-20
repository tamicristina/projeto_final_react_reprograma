import { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import image from "../../assets/header_image.svg";
import projetos from "./portfolioList";
import axios from "axios";
import "./portfolio.css";

const repositoriosReprograma = [
  {
    id: 1,
    nome: "Desafio de API - Github",
    descrição:
      "Desafio final do módulo de JavaScript consumindo a API do github",
    ferramentas: "HTML | CSS | JAVASCRIPT | API REST",
    imagem: "../../assets/gif_github.gif",
    link: "https://github.com/tamicristina/On17-TodasEmTech_DesafioES6/tree/tamires-cristina",
  },
  {
    id: 2,
    nome: "Desafio de API - Digimon",
    descrição: "Desafio do módulo de JavaScript consumindo a API do Digimon",
    ferramentas: "HTML | CSS | JAVASCRIPT | API REST",
    imagem: "../../assets/gif_digimon.gif",
    link: "https://github.com/tamicristina/On17-TodasEmTech-JavascriptV/tree/tamires-cristina",
  },
  {
    id: 3,
    nome: "Desafio responsividade",
    descrição: "Desafio realizado para praticar a responsividade",
    ferramentas: "HTML | CSS ",
    imagem: "../../assets/gif_clone_twitter.gif",
    link: "https://github.com/tamicristina/On17-TodasEmTech-HTMLeCSS-II/tree/tamires-cristina",
  },
  {
    id: 4,
    nome: "Desafio JavaScrip",
    descrição:
      "Desafio para renderizar dados de um json em tela utilizando métodos de array",
    ferramentas: "HTML | CSS | JAVASCRIPT ",
    imagem: "../../assets/desafio_javascript.png",
    link: "https://github.com/tamicristina/On17-TodasEmTech_JavascriptIII/tree/tamires-cristina",
  },
];



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
            console.log(projeto);
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
