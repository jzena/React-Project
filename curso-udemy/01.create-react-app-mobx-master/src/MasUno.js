import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class MasUno extends Component {
    otraFuncion() {
        console.log(VarPrincipalData);
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.otraFuncion.bind(this)}>otrafuncion</button>*/}
                <button onClick={function () { VarPrincipalData.aumentarNumero() }}>Aumentar</button>
            </div>
        );
    }
}

export default MasUno;