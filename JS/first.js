alert("Questo e' un messaggio");
document.write("Hello World!")
alert("Questo e' un altro messaggio");
/**
 * parsing in modo sequenziale
 * vengono eseguiti sequenzialmente, prima parte un alert..
 * poi l'altro 
 * */


//FUNZIONE
function test(a, b) {
    document.write(a);
    document.write(b);
}

//INVOCO LA FUNZIONE
test("Marco", "Ross");


//Funzione: dato il numero binario lo trasforma in numero decimale
function conversion(num) {
    return parseInt(num, 2);
}


window.onload = () => {
    console.log(conversion("00010101"));
}


//let fn = function() {}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach(function(n) {
        console.log(n) //per ogni elemento dell'array applico la funzione function
    }) //console.log mostra sulla console del browser


let matrix = [
    []
];

function test2() {
    let input = prompt("Mi chiamo", "Marco");
    console.log(input);
    console.log("Io mi chiamo".concat(" Marco"))
    const a = "ciao"
    const b = 3
    const convertAndCast = a === b;
    console.log(convertAndCast);
};

function test3() {
    let input = prompt("In che anno siamo", 2022);
    if (input != 2022 && input != 2021 || input != 2020) console.log("Risposta Sbagliata")
    else if (input == 2022) console.log("Risposta Corretta")

    let status = prompt("Quanti anni hai?");
    console.log(status >= 18 ? "Maggiorenne" : "Minorenne");
}

function test4() {

    let n = 0;
    const array = [1, 2, 3, 4, 5, 6]
    for (n = 0; n < array.length; n++) {
        console.log(array[n]);
    }

}

function multi(x, y) {
    const result = x * y;
    console.log(result);
    return result;
}

function test5() {
    let s = new String();
    let o = new Object(); //superclasse di tutti
    let d = new Date();
    let a = new Array();
    alert(d.getFullYear);
}