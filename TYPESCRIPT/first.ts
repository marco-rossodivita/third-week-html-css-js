//possiamo scrivere anche const hello = "hello world"
//è sempre JS solo che typescrypt è un superset; è una estensione di JS
const fn5: Function = () =>{
    const hello: string | boolean | Function | {} | undefined | null = 
    "Hello World";
    console.log(hello as Object);
}