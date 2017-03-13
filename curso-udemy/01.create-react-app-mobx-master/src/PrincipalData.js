import { extendObservable } from 'mobx';

class PrincipalData {
    constructor() {
        extendObservable(this,
            { numero: 0 });
    }

    aumentarNumero() {
        this.numero = this.numero + 1;
    }

    disminuirNumero() {
        this.numero = this.numero - 1;
    }

}

var VarPrincipalData = new PrincipalData;

export default VarPrincipalData;