import React, { Component } from "react";
import './style.css';
 class FormularioCad extends Component{
    render(){
        return(
            <form className="form-cadastro">
            <input type="text" placeholder='Título' className="form-cadastro_input"/>
            <textarea rows={15} placeholder='Escreva a sua nota...' className="form-cadastro_input"></textarea>
            <input type="color" className="form-cadastro_color"/>
            <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
          </form>
        )
    }
}
export default FormularioCad;