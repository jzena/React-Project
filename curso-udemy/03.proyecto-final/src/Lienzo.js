import React, { Component } from 'react';
import Platillos from './Platillos';
import Pedidos from './Pedidos';
import Bebidas from './Bebidas';
import { Link } from 'react-router';

class Lienzo extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>Nombre de tienda</h2>
                </div>
                <div>
                    <ul className="nav nav-pills ListMargin">
                        <li role="presentation" className="active">Comidas</li>
                        <li role="presentation" className="active">Bebidas</li>
                    </ul>
                </div>
                {this.props.children}
                <Pedidos />
            </div>
        );
    }
}

export default Lienzo;