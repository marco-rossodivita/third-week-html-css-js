import { areaTriangolo, areaCerchio, areaQuadrato } from "./type";


export class Triangolo {
    base: Number;
    altezza: Number;

    constructor(base: Number, altezza: Number){
        this.base=base;
        this.altezza=altezza;
    }

public getBase(): Number {
    return this.base;
} 

public getAltezza(): Number {
    return this.altezza;
}

public setBase(base: Number): void{
    this.base = base;
}

public setAltezza(altezza: Number): void{
    this.altezza = altezza;
}

}


export class Quadrato{
    lato: Number;

    constructor(lato: Number){
        this.lato=lato;
    }

public getLato(): Number {
    return this.lato;
} 

public setLato(lato: Number): void{
    this.lato = lato;
}

}



export class Cerchio{
    raggio: Number;

    constructor(raggio: Number){
        this.raggio=raggio;
    }

public getRaggio(): Number {
    return this.raggio;
} 

public setRaggio(raggio: Number): void{
    this.raggio = raggio;
}
}



let triangolo = new Triangolo(5,6);

function prova(){
    console.log(areaTriangolo(triangolo));
}
 
