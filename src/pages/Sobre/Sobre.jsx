import image from "../../assets/about_me.svg";
import Header from "../../componentes/Header/Header";
import "./sobre.css";


function Sobre(){
  return (
    <>
    <Header 
      image={image} 
      description="ilustracao mulher com coração"
    >
      Sobre Mim
    </Header>
    <div className="container-sobre-mim">
        <img src="../../../src/assets/img_autora.jpeg" />
        <span className="container-sobre-mim-texto">
          <h1>Prazer, Tamires</h1>
          <p>
            Sou aluna de front-end na reprograma, na turma On17. Fiz transição
            de carreira para a área de tecnologia e atualmente trabalho como
            Software Engineer Trainee na Creditas.
          </p>
        </span>
      </div>
    </>
  )
}

export default Sobre