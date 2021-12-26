import React, { Component } from "react";
import './style.css';
 class FormularioCad extends Component{

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto= "";
    this.color = "";
    this.colortext = "";
  }

  _handleMudancaTitulo(evento){
       this.titulo = evento.target.value;
       evento.stopPropagation();
  }

  _handleMudancaTexto(evento){
    this.texto = evento.target.value;
    evento.stopPropagation();
  }

  _handlecolor(evento){
    this.color = evento.target.value;
    evento.stopPropagation();
  }

  _handlecolortext(evento){
    this.colortext = evento.target.value;
    evento.stopPropagation();
  }

  _criarnota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarnota(this.titulo, this.texto , this.color ,  this.colortext);
  }
    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarnota.bind(this)}>
            <input type="text" placeholder='Título' className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
            <textarea rows={15} placeholder='Escreva a sua nota...' className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}></textarea>
            <div className='colors'>
            <label>Cor da Nota         
            <input type="color"  onChange={this._handlecolor.bind(this)}/>
            </label> 
            <div className="">
            <label>Cor da Texto
            <input type="color"  onChange={this._handlecolortext.bind(this)}/>
            </label>
            </div>
            </div>
            <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
          </form>
        )
    }
}
export default FormularioCad;