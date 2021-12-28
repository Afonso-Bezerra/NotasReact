import React, { Component } from "react";
import './style.css';
import { FaFlag } from "react-icons/fa";

 class FormularioCad extends Component{

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto= "";
    this.color = "";
    this.colortext = "";
    this.prioridade = "";
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

  
  _handleprioridade(evento){
    this.prioridade = evento.target.value;
    const select = document.getElementById('colorselect')
    if(this.prioridade ===  '1'){
      select.style.color = 'red'
    }else if(this.prioridade === '2'){
      select.style.color = 'blue';
    }else if(this.prioridade === '3'){
      select.style.color = 'green';
    }
    evento.stopPropagation();
  }
  _criarnota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarnota(this.titulo, this.texto , this.color ,  this.colortext , this.prioridade);
  }

  

    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarnota.bind(this)}>
            <input type="text" placeholder='Título' className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
            <textarea rows={15} placeholder='Escreva a sua nota...' className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}></textarea>
            <label>Defina Prioridade</label>
            <select name="prioridade" className="select_prioridade" id='colorselect' onChange={this._handleprioridade.bind(this)}>
            <option value="1" id='urgente'> Urgente</option>
            <option value="2" id='mediana'>Mediana</option>
            <option value="3" id='baixa'>Baixa</option>
            </select> 
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