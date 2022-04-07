document.addEventListener('DOMContentLoaded', function() {



    let n1, n2, n3, n4;


    const init = () => {
        n1 = document.querySelector('.n1').innerHTML = rand();
        n2 = document.querySelector('.n2').innerHTML = rand();
        n3 = document.querySelector('.n3').innerHTML = rand();
        n4 = document.querySelector('.n4').innerHTML = rand();
    }



    const rand = () => {
        return Math.round(Math.random() * 90)
    }

    //Assegno i numeri random ai 4 quadrati
    init();

    function op() {
        let inp = prompt("Operations: 1. addition; 2. subtraction; 3. multiplication, 4. division");


        let ris;

        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);


        switch (inp) {
            case "addition":
                console.log("The addition is:");
                ris = num1 + num2 + num3 + num4;
                break;
            case "subtraction":
                console.log("The subtraction is:");
                ris = num1 - num2 - num3 - num4;
                break;
            case "multiplication":
                console.log("The multiplication is:");
                ris = num1 * num2 * num3 * num4;
                break;
            case "division":
                console.log("The division is:");
                ris = num1 / num2 / num3 / num4;
                break;
            default:
                alert("Operation not valid");
                break;
        }

        console.log(ris);

    }
});