import React, { Component } from 'react';
import ListaDeNotas from './components/listadenotas';
import FormularioCad from './components/form-cad';
import './Assets/App.css';
import './Assets/index.css';
class App extends Component{
  render(){
  return (
    <section className='conteudo'> 
    <FormularioCad/>
    <ListaDeNotas/>
    </section>
  );
  }
}

export default App;
