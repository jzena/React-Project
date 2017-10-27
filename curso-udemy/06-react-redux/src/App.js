import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.informacion} ....
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// Ingresa como props a nuestro Component tanto el STATE como los DISPATCH

// internamente hace una subscripción y un getstate
// por lo que constantemente en caso de un cambio en el STATE se actualiza
// o se ejecuta nuevamente
const mapStateToProps = (state) => {
  // return de un objeto javascript
  return {
    informacion: state.cantidad
  }
}

const mapDispatchToProps = {
  aumentar: () => { return { type: "AUM" } },
  disminuir: () => { return { type: "DIS" } }
}

// connect nos permite acceder al STATE y hacer DISPATCH de ACTIONS
// y ACTION CREATOR

export default connect(mapStateToProps, mapDispatchToProps)(App);
