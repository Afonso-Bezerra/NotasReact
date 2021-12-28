import React, { Component } from 'react';
import './style.css';
import { FaFlag } from "react-icons/fa";
class Cardnota extends Component {
    render() { 

    let background = '';
    let colortxt = '';
    let coloricon = '';

    if(this.props.background === ""){
        background = '#ececec'
      }
    else{
      background = this.props.background;
    }
    if(this.props.color === null){
      colortxt = "#0000"
    }else{
      colortxt =this.props.color; 
    } 

    if(this.props.prioridade === '1'){
      coloricon = 'red'
    }else if(this.props.prioridade === '2'){
      coloricon = 'blue'
    }else if(this.props.prioridade === '3'){
      coloricon = 'green'
    }

  
        return (
        <section className='card-nota' style={{background: background}}>
            <FaFlag id="icon" style={{color: coloricon}}/>
            <header className='card-nota_cabecalho'>
            
              <h3 className='card-nota_titulo' style={{color: colortxt}}>{this.props.titulo}</h3>
            </header>
              <p className='card-nota_texto' style={{color: colortxt}}>{this.props.texto}</p>
        </section>
        ); 
    }
}
 
export default Cardnota;