import React, { Component } from 'react';
import ListaDeNotas from './components/listadenotas';
import FormularioCad from './components/form-cad';
import './Assets/App.css';
import './Assets/index.css';
class App extends Component{

  constructor(){
    super();
    this.state = {
      notas:[]
    }
  }
  criarnota(titulo, texto, color, colortext){
    const novaNota =  {titulo, texto, color, colortext};
    const novoArraydenotas =[...this.state.notas, novaNota];
    const novoestado = {
      notas:novoArraydenotas
    };
    this.setState(novoestado);
   }


  render(){
  return (
    <section className='conteudo'> 
    <FormularioCad criarnota={this.criarnota.bind(this)}/>
    <ListaDeNotas notas={this.state.notas}/>
    </section>
  );
  }
}

export default App;
