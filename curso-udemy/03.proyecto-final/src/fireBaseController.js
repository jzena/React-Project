import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB6QQxPjS2BJ9gq2bRSgA4qrHlM9jF0k2k",
    authDomain: "administracion-17f39.firebaseapp.com",
    databaseURL: "https://administracion-17f39.firebaseio.com",
    storageBucket: "administracion-17f39.appspot.com",
    messagingSenderId: "15326671545"
};

firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = { platillos, bebidas };

export default datos;