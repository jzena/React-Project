// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6QQxPjS2BJ9gq2bRSgA4qrHlM9jF0k2k",
    authDomain: "administracion-17f39.firebaseapp.com",
    databaseURL: "https://administracion-17f39.firebaseio.com",
    storageBucket: "administracion-17f39.appspot.com",
    messagingSenderId: "15326671545"
};
firebase.initializeApp(config);

// 1. Crear platillos

var database = firebase.database();

var escribirPlatillo = function (pnombre, pdescripcion, pprecio, pdireccion) {
    database.ref('alimentos/').push({
        nombre: pnombre,
        descripcion: pdescripcion,
        precio: pprecio,
        cantidad: 0,
        direccion: pdireccion

    }).then(function () {
        alert("Se agregó el platillo");
        //window.location = "agregarPlatillo.html";
    }).catch(function (error) {
        alert("No se agregó el platillo: " + error);
    });
}

// 2. Leer nuestros platillos

var imprimirPlatillos = function () {
    var query = database.ref('alimentos/');
    query.on('value', function (snapshot) {
        var ul = document.getElementById('lista');
        //console.log(snapshot.val());
        snapshot.forEach(function (childSnapshot) {
            console.log(childSnapshot.key);
            console.log(childSnapshot.val());

            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var li = document.createElement('li');
            var div = document.createElement('div');
            var img = document.createElement('img');
            var br = document.createElement('br');

            img.src = childData.direccion;
            img.height = 60;
            img.alt = "Imagen del platillo";

            div.appendChild(img);
            div.style.float = "right";
            li.setAttribute("class", "list-group-item");
            li.appendChild(div);
            li.appendChild(document.createTextNode("Nombre: " + childData.nombre));
            li.appendChild(br);
            li.appendChild(document.createTextNode("Descripcion: " + childData.descripcion));
            li.appendChild(br);
            li.appendChild(document.createTextNode("Precio: " + childData.precio));

            ul.appendChild(li);
        });
    });
}

// 3. Eliminar nuestros platillos


function funcionDeLaForma() {
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var precio = document.getElementById("precio").value;
    var imagen = document.getElementById("imgDir").value;

    escribirPlatillo(nombre, descripcion, precio, imagen);

}


// 4. Visualizar imagen

var storage = firebase.storage();
var storageRef = storage.ref();

function visualizarArchivo() {
    var preview = document.querySelector('img');
    var archivo = document.querySelector('input[type=file]').files[0];
    var lector = new FileReader();

    lector.onloadend = function () {
        preview.src = lector.result;
    }

    if (archivo) {
        lector.readAsDataURL(archivo);
        var subirImagem = storageRef.child('platillos/' + archivo.name).put(archivo);
        subirImagem.on('state_changed', function (snapshot) {
            // Los cambios en la carga de nuestro archivo
        }, function (error) {
            console.log("Error en la carga de la imagen: " + error);
        }, function () {
            // Carga exitosa
            console.log(subirImagem.snapshot.downloadURL);
            document.getElementById('imgDir').value = subirImagem.snapshot.downloadURL;
        });

    } else {
        preview.src = "";
    }

}