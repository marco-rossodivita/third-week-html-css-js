import { Logger, Utils } from './oop';

function name(param) {
    console.log(param)
}

//FUNZIONE ANONIMA
let fn = function() {}

//IIFE - FUNZIONE IMMEDIATELY INVOKED
(function() {
    alert('Hello WOrld')
}());

(function(_param) {
    alert('Hello World')
}("Hello World"));

//E' possibile passare delle funzioni
//un metodo prende come parametro un altro metodo

let array = [2, 5, 7, 9, 33, 54, 67];
//posso stamparmi tutti i dati
//ovviamente vi sono diverse maniere per farlo
//ma in javascript si usa lo stile FUNZIONALE

//Funzione anonima
array.forEach(function(e, _index) {
    console.log(e) //per ogni elemento dell'array, stampami il numero
});

//ARROW FUNCTION
let fn_a = () => {}

(_param) => {
    alert('Hello World')
};

//ARROW FUNCTION ALL'INTERNO DI FUNZIONI CON CALLBACK
array.map((e, _index) => {
    console.log(e) //per ogni elemento dell'array, stampami il numero
});

array.forEach((e, _index) => {
    console.log(e) //per ogni elemento dell'array, stampami il numero
});

array.flatMap((e, _index) => {
    console.log(e) //per ogni elemento dell'array, stampami il numero
});

//TRASFORMIAMO LA CLASSICA FUNZIONE IN ARROW FUNCTION
const name2 = (param) => {
    console.log(param)
}
name2("www")