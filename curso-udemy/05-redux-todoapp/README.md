# Todo App with redux

## HTML code

```html
<head>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js"></script>
</head>
    <h2>Todo App</h2>
    <br>
    <label>Ingresar tarea</label>
    <input id="texto" onkeypress="agregarTarea(event)">
    <!-- evento para funcion -->
    <ul id="listaDesordenada">

    </ul>
```

## JAVASCRIPT code

```js
// JUEGO DE REDUX

        // I. CREAR el state inicial
        var state = {
            lista: []
        }

        // II. Crear el store
        var store = Redux.createStore(reducer, state);

        // III. REDUCER
        function reducer(state, action) {

            var nuevoEstado = Object.assign({}, state);
            if (action.type === 'AGR') {
                // nuevoEstado.lista.push({
                //     id: action.id,
                //     li: "<li>" + action.tarea + "<button id='" + action.id + "' onclick='eliminarTarea(id)'>Eliminar</button>" + "</li>"
                // });
                nuevoEstado.lista = state.lista.concat(
                    [
                        {
                            id: action.id,
                            li: "<li>" + action.tarea + "<button id='" + action.id +
                            "' onclick='eliminarTarea(id)'>Eliminar</button>" + "</li>"
                        }
                    ]
                );
                // <button id='(action.id)' onclick='eliminarTarea(id)'></button>
                // console.log(nuevoEstado);
                return nuevoEstado;
            }
            else if (action.type === 'ELM') {
                nuevoEstado.lista = state.lista.filter(function (elemento) {
                    return parseInt(elemento.id) !== parseInt(action.id)
                });
                return nuevoEstado;
            }
            return state;
        }

        // IV. ACTION
        // var actionA = {
        //     type: 'AGR'
        // }

        // IV. ACTION CREATOR
        var actionAgregar = function (tarea, id) {
            return {
                type: 'AGR',
                tarea,
                id
            }
        }
        var actionEliminar = function (id) {
            return {
                type: 'ELM',
                id
            }
        }

        var id = 1;

        var agregarTarea = function (evento) {
            if (evento.keyCode === 13) {
                var tarea = evento.target.value;
                //console.log(evento.target.value);
                evento.target.value = "";
                store.dispatch(actionAgregar(tarea, id));
                id = id + 1;
            }
        }

        var eliminarTarea = function (_id) {
            store.dispatch(actionEliminar(_id));
        }

        var mostrarTareas = function () {
            var listaD = document.getElementById("listaDesordenada");
            var elementos = store.getState().lista;
            var mostrarElementos = elementos.map(function (elemento) {
                return elemento.li;
            });

            listaD.innerHTML = mostrarElementos;
        }

        // Mostrar los elementos cada vez que hay una modificacion en el state del STORE
        store.subscribe(mostrarTareas);
```