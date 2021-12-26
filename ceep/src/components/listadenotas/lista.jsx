import React, { Component } from "react";
import Cardnota from "../cardnota";
import './style.css';

class ListaDeNotas extends Component{
    render(){
        return(
          <ul className="lista-notas">
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias, index) =>{
              return(
                <li key={index} className="lista-notas_item">
                <Cardnota/>
               </li> 
              );
            })}
          </ul>
        )
    }
}

export default ListaDeNotas;