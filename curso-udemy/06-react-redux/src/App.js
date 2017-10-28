import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.agregarTarea = this.agregarTarea.bind(this);
    this.eliminarTarea = this.eliminarTarea.bind(this);

  }

  agregarTarea = (evento) => {
    if (evento.which === 13) {
      console.log(evento.target.value);
      var tarea = evento.target.value;
      this.props.agregar(tarea, this.props.id);
      evento.target.value = "";
    }
  }

  eliminarTarea = (index) => {
    console.log(index);
    this.props.eliminar(index);
  }

  render() {
    const elementosTareas = this.props.tareas.map((tarea) => {
      return <h2 key={tarea.id} onClick={()=> {this.eliminarTarea(tarea.id)}}>{tarea.tarea}</h2>
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.props.informacion}
          <br />
          <button onClick={this.props.aumentar}>Aumentar</button>
          <button onClick={this.props.disminuir}>Disminuir</button>
          <br />
          Tarea:<input onKeyPress={this.agregarTarea} />
          <br />
          
          {elementosTareas}
          <br />
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

// Ingresa como props a nuestro Component tanto el STATE como los DISPATCH

// internamente hace una subscripción y un getstate
// por lo que constantemente en caso de un cambio en el STATE se actualiza
// o se ejecuta nuevamente
// este es una función mapStateToProps 
const mapStateToProps = (state) => {
  // return de un objeto javascript
  return {
    // informacion: state.cantidad
    informacion: state.numero,
    tareas: state.tareas,
    id: state.id
  }
}

// mapDispatchToProps puede ser un objeto, que asume que las funciones internas son ACTION CREATOR
// y que al ingresarlas a nuestro component las engloba en dispatch para que
// de esta forma puedan ser llamadas como un dispatch
// const mapDispatchToProps = {
//   aumentar: () => { return { type: "AUM" } },
//   disminuir: () => { return { type: "DIS" } }
// }

// mapDispatchToProps puede ser también una funcion que tiene disponible
// el dispatch y por lo tanto podemos ejecutarlo dentro de nuestras funciones
const mapDispatchToProps = (dispatch) => {
  return {
    // Dispatch aplicando middleware con redux-thunk
    aumentar: () => { dispatch((dispatch)=>{
      setTimeout(()=>{
        return dispatch({ type: "AUM" })
      },3000);
      }
    )},
    disminuir: () => { 
      setTimeout(()=>{
        dispatch({ type: "DIS" }) 
      },5000);
    },
    // disminuir: () => { dispatch({ type: "DIS" }) },
    agregar: (tarea, id) => { dispatch({ type: "ADD", tarea, id }) },
    eliminar: (id) => { dispatch({ type: "DEL", id }) }
  }
}

// connect nos permite acceder al STATE y hacer DISPATCH de ACTIONS
// y ACTION CREATOR

export default connect(mapStateToProps, mapDispatchToProps)(App);
