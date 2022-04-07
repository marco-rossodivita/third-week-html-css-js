document.addEventListener('DOMContentLoaded', function() {

    // TIPOLOGIA 1 -> document.getElementById
    let div = document.getElementById('div').classList.add('classAdded');
    alert(div);

    // TIPOLOGIA 2 -> getElementsByClassName -----> collection
    let p1 = document.getElementsByClassName('classP1')[0].classList.add('p1Class');
    alert(p1);

    //TIPOLOGIA 3- document.getElementsByTagName ----> collection
    let p2 = document.getElementsByTagName('p')

    for (let i = 0; i < p2.length; i++) {
        p2[i].classList.add('allP');
    }

    //TIPOLOGIA 4 - aggiungiamo un elemento passandoci il selettore
    let button = document.querySelector('.btn').innerHTML = 'Call method';
    alert(button);

    //TIPOLOGIA 5 
    let el = document.querySelectorAll('.a');
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add('allE');
    }

    //cinque metodi per recuperare elementi del DOM
})