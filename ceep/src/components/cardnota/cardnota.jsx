import React, { Component } from 'react';
import './style.css';
class Cardnota extends Component {
    render() { 
      let background = '';
      let colortxt = '';
      {if(this.props.background === ""){
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
  
    console.log(this.props.color, this.props.background)
  }
        return (
        <section className='card-nota' style={{background: background, color: colortxt}}>
            <header className='card-nota_cabecalho'>
              <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
            </header>
              <p className='card-nota_texto'>{this.props.texto}</p>
        </section>
        ); 
    }
}
 
export default Cardnota;