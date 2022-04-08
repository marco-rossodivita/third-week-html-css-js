
interface IUser{
    username: string,
    password: string,
    email: string,
    enable?: boolean
}

interface IThread{
    start(): void;
}

interface IRunnable extends IThread{
    run(): IUser;
}

//classe astratta e metodi astratti all'interno
abstract class IRunner{

    name:string;

    constructor(name: string){
        this.name = name;
    }

    abstract print(): void;
    abstract set(): void;
}


class IRunnerImpl extends IRunner{

    name: string;

    constructor(name: string){
        super(name);
    }


    print(): void {
        throw new Error("Method not implemented");
    }

    set(){
        throw new Error("Method not implemented");
    }
}

//Interfaccia generica
//Composta da due parametri U e V
//ma V estende un oggetto composto da una funzione run()
//che mi returna void!
interface IPrinterOut<U, V, T, S extends IRunnable>{
    print(param:U, para1:V): void;
    start(param1: U, param?: V, param3?: T): S; //?: PARAMETRO DI TIPO OPZIONALE
}

class PrinterOut implements IPrinterOut<Object,{},number, IRunnable>{
    print(param: Object, para1:{}): void{
        throw new Error("Method not implemented");
    }
    start(param1: Object, param?: {}, param3?: number): IRunnable{
        throw new Error("Method not implemented");
    }

}


//type Obj = IUser; //I TYPE SONO ALIAS

type Obj = IPrinterOut<Object, {}, number, IRunnable>;

declare const globalVar;