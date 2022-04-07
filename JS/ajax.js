function ajax() {

    const call = new XMLHttpRequest()


    call.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    call.onreadystatechange = () => {

        if (call.readystate == 4 && call.status == 200) {
            //document.getElementById("res").innerHTML += call.responseText.replaceAll(",", "<br>");
            let obj = eval(call.responseText);
            let res = document.getElementById("res");
            obj.forEach(element => {
                res.innerHTML += "<p><b>userID: </b>" + element.userId + "</p>"
                res.innerHTML += "<p><b>id: </b>" + id + "</p>"
                res.innerHTML += "<p><b>title: </b>" + element.title + "</p>"
                res.innerHTML += "<p><b>body: </b>" + element.body + "</p>"
            });
        }
    }
    call.send(null);

}

//chiamate HTTP in modo più conciso
const ajaxFetch = () => {


    //il fetch ha bisogno di: URL, 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) //ottengo la risposta
        .then(response => console.log(response)) //gestisco la fase di successo
        .catch(() => "Alert error") //gestisco la fase di errore


};