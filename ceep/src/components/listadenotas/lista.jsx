import React, { Component } from "react";
import Cardnota from "../cardnota";
import './style.css';

class ListaDeNotas extends Component{
  
  constructor(){
    super();
    this.state = {
      order:[]
    }
  }

  orderList() {
   let setprioridade = {};
    this.props.notas.map((notas) => (
      setprioridade = [...this.state.order, notas.titulo, parseInt(notas.priority)]
    
      ))

  const novaprioridade = {
      order:setprioridade
    };
    this.setState(novaprioridade)
  }

    render(){
    
        return(
          <ul className="lista-notas">
            {this.props.notas.map((notas, index) =>{ 
           
              return(
                <li key={index} className="lista-notas_item">
                <Cardnota titulo={notas.titulo} texto={notas.texto} background={notas.color} 
                color={notas.colortext} 
                prioridade={notas.priority}
                
                />
               </li> 
              );
            })}
          </ul>
        )
    }
}

export default ListaDeNotas;