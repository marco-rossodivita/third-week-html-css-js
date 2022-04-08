//Gestiamo un semplice caso in cui vi sono dei dischi in vinile
//le interfacce posiamo anche usarle come tipo in JS
export interface Records {
    id: string; //obbligatorio
    name: string; //obbligatorio
    age?: number; //non obbligatorio
    description;
}

//interfaccia in cui mettiamo operazioni
export interface RecordsOperation<Z> {
    loadRecord(param: Z): Z; //metodo che mi ritorna Z
    printData<Z>(): void;
}


//gestisco questo tipo di dato
export abstract class RecordsImpl implements RecordsOperation<Records>{
    

    record: Records;
    constructor({id, name, age, description}: Records){
        this.record.id = id;
        this.record.name = name;
        this.record.age=age;
        this.record.description = description;
    }
    
    
    
    
    printData<Records>(): void{
        this.record = this.loadRecord(null);
    }
    
    loadRecord(record: Records): Records{ //parametro di tipo Records; metodo che mi ritorna un Records
        this.record.id = "1";
        this.record.age = 12;
        this.record.description = "Red Hot Chili Peppers, Californication";
        this.record.name = "Californication";
        
        return this.record;
    }
}