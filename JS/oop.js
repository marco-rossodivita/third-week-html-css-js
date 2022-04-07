export class Logger extends Object {

    name = new String()
    data = new Date()

    constructor() {}

    /**
     * 
     * @param {*} name 
     * @param {*} data 
     */
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    //passiamo un array di opzioni
    setup(...options) {
        [...options].forEach(o => {
            //made something with single options
        })
    }

    getData() {
        return this.data;
    }

    getName() {
        return this.name;
    }

    /**
     * 
     * @param {*} message 
     */
    info(message) { console.info(message) }

    /**
     * 
     * @param {*} message 
     */
    debug(message) { console.debug(message) }

    /**
     * 
     * @param {*} message 
     */
    warn(message) { console.warn(message) }

    /**
     * 
     * @param {*} message 
     */
    error(message) { console.error(message) }
}

const L = new Logger();
L.data = new Date('2022', '04', '06'); //ho preso la variabile data
L.info(L.data); //DALLA CLASSE L

class Utils {}

export { Logger, Utils }