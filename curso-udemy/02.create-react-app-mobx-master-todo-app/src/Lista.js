import React, { Component } from 'react';
import VarListaData from './ListaData';
import { observer } from 'mobx-react'

class Lista extends Component {

    enviarTarea(evento) {
        if (evento.which === 13) {
            VarListaData.agregarTarea(evento.target.value);
            evento.target.value = "";
        }
    }


    render() {
        let listaDiv = [];

        const agregarDiv = VarListaData.tareas.forEach(
            (value, index) => {
                listaDiv.push(<li className="list-group-item" onClick={function () { VarListaData.eliminarTarea(index) }} key={index} >{value}</li>);
            }
        );

        return (
            <div className="container">
                <h2>Lista</h2>
                <input type="text" onKeyPress={this.enviarTarea.bind(this)} />
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group">
                            {listaDiv}
                        </ul>
                    </div>
                </div>                
            </div>
        );
    }
}

export default observer(Lista);