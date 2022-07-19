import Header from "../../componentes/Header/Header"
import image from '../../../src/assets/contact.svg'
import { FiSend } from 'react-icons/fi'
import "./contato.css";




function Contato (){
  return(
    <>
    <Header image={image}/>
    <form className="inputs-container">
            <input className="form_input" type="text" placeholder="Nome" required />
            <input className="form_input" type="email" placeholder="Email" required />
            <input className="form_input" type="tel" placeholder="Telefone " required />
            <input className="form_input" type="text" placeholder="Assunto" required />
            <input className="textarea" placeholder="Envie sua mensagem" required />
            <button className="submit"><FiSend size={20} /></button>
        </form>
    </>
  )
}

export default Contato;