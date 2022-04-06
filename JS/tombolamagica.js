function confronta() {

    let array1 = [];

    for (i = 0; i < 10; i++) {
        array1.push(Math.round(Math.random() * 90));
        console.log(array1[i]);
    }

    let array2 = [2, 22, 41, 23, 6, 10, 9, 78, 64, 33];


    let num = 0

    for (i = 0; i < array2.length; i++) {

        for (a = 0; a < array1.length; a++) {

            if (array2[i] == array1[a]) {
                num++;
            }
        }
    }

    if (num < 2) {
        console.log("Mi dispiace, hai perso")
    } else if (num == 2) {
        console.log("Hai fatto ambo")
    } else if (num == 3) {
        console.log("Hai fatto terna")
    } else if (num == 4) {
        console.log("Hai fatto quaterna")
    } else if (num == 5) {
        console.log("Hai fatto cinquina")
    } else if (num == 10) {
        console.log("tombola")
    }
}