import {Triangolo,Quadrato,Cerchio} from "./index";


    export function areaTriangolo(t: Triangolo){
        return this.base * this.altezza / 2;
    }
    
    export function areaQuadrato(q: Quadrato){
        return this.lato * this.lato;
    }
    
    export function areaCerchio(c: Cerchio){
        return 3.14 * this.raggio * this.raggio;
    }




