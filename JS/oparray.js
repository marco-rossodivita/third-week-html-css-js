function operations() {

    let array1 = Array();
    let array2 = Array();

    //Creo due array di dimensione 10, con numeri casuali
    for (let i = 0; i < 10; i++) {
        array1[i] = Math.round(Math.random() * 10);
        array2[i] = Math.round(Math.random() * 10);
    }

    console.log("The first array is: " + array1);
    console.log("The second array is: " + array2);

    //prompt di operazioni
    let inp = prompt("Operations: 1. addition; 2. subtraction; 3. multiplication, 4. division");

    let array3 = Array();
    for (let j = 0; j < 10; j++) {
        switch (inp) {
            case "addition":
                console.log("The addition is:");
                array3[j] = array1[j] + array2[j];
                break;
            case "subtraction":
                console.log("The subtraction is:");
                array3[j] = array1[j] - array2[j];
                break;
            case "multiplication":
                console.log("The multiplication is:");
                array3[j] = array1[j] * array2[j];
                break;
            case "division":
                console.log("The division is:");
                array3[j] = array1[j] / array2[j];
                break;
            default:
                alert("Operation not valid");
                break;
        }
    }

    console.log(array3);
}