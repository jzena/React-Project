# Redux -- Counter

## Html code
```html
    <div>
        Valor:
        <span id="numero"></span>
        <br>
        <button id="aum" onclick="aumentar()">Aumentar</button>
        <button id="dis" onclick="disminuir()">Disminuir</button>
    </div>
```

## Javascript code
```js

        // REDUX GAME
        var self = this;

        // I. STATE
        var state = {
            cantidad: 0
        }

        // II. STORE toma dos parametros (reducer, state)
        var store = Redux.createStore(reducer, state);

        // III. REDUCER es una funcion que regresa unnuevo estado
        // y también decimos que toma dos parametros (state, action)
        function reducer(state, action) {
            var nuevoEstado = Object.assign({}, state);
            if (action.type === 'AUM') {
                //console.log(state.cantidad);
                nuevoEstado.cantidad = state.cantidad + 1;
                console.log(nuevoEstado.cantidad);
                console.log(self.state.cantidad);
                //console.log(state.cantidad);
                return nuevoEstado;
            }
            else if (action.type === 'DIS') {
                nuevoEstado.cantidad = state.cantidad - 1;
                return nuevoEstado;
            }
            return state;
        }

        // IV. ACTION es un objeto JS con el requisito de tener 
        // un key "type"
        // se acciona a través de un store.dispatch(action);
        
        var actionAumentar = {
            type: 'AUM'
        }
        var actionDisminuir = {
            type: 'DIS'
        }

        // V. DISPATCH ejecuta la llamada al store y pasa el tipo de Accion
        
        var aumentar = function () {
            store.dispatch(actionAumentar);
        }

        var disminuir = function () {
            store.dispatch(actionDisminuir);
        }

        var numero = document.getElementById('numero');

        // VI. Acceder al state a través del store

        var mostrarNumero = function () {
            numero.innerHTML = store.getState().cantidad;
        }

        mostrarNumero();

        // VII. Suscribir el método que tiene o muestra el state
        // para que se ejecute nuevamente cuando el STORE lo indique

        store.subscribe(mostrarNumero);

```