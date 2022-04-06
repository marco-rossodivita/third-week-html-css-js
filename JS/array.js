function casualArr() {

    let input = prompt("Inserisci dimensione:");

    let arr = [];

    for (i = 0; i < input; i++) {
        arr(i) = Math.round(Math.random());
    }

    arr.forEach(element => {
        console.log(element);
    });

    for (j = arr.length - 1; j >= 0; j--) {
        console.log(j);
    }

}