interface Runnable2<T,U>{}


//Interfaccia generica
interface Runnable<T,U>{
    run<T>(runnable: T); //metodo generico con parametro generico
    runSafe<T extends Runnable<T,U>>(); //un singolo parametro che estende
    //l'interfaccia runnable
}


let runnable: Runnable<string, string>;

runnable.runSafe<Runnable<string,string>>();

/**
 * Abbiamo una interf generica con metodo generico
 * dichiariamo una variabile di quella interfaccia di stringhe
 * 
 * run<string>(runnable: string)
 */

/**
 * runSafe ha un parametro generico; per vincolarlo meglio
 * il parametro T estende Runnable, ma quello che gli passo
 * deve essere qualcosa che estende l'interfaccia Runnable
 */