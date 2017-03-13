import React, { Component } from 'react';
import Segundo from './Segundo';

class PrincipalComponent extends Component {
    render() {
        return (
            <div>
                <h2>Hola desde componente</h2>
                <h2>de create-react-app</h2>
                <Segundo/>
            </div>
        );
    }
}

export default PrincipalComponent;