import React, { Component } from "react";
import Cardnota from "../cardnota";
import './style.css';

class ListaDeNotas extends Component{

    render(){
        return(
          <ul className="lista-notas">
            {this.props.notas.map((notas, index) =>{
              return(
                <li key={index} className="lista-notas_item">
                <Cardnota titulo={notas.titulo} texto={notas.texto} background={notas.color} color={notas.colortext}/>
               </li> 
              );
            })}
          </ul>
        )
    }
}

export default ListaDeNotas;