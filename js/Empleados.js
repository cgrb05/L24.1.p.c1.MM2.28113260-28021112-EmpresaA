export default class Empleados {
    constructor( nomb, tipo, suel) {
        this.nombre = nomb;
        this.tipo = tipo;
        this.sueldo = suel;
    }
    set nombre(nomb) {
        this._nombre = nomb;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set sueldo(suel) {
        this._sueldo = suel;
    }
    get sueldo() {
        return this._sueldo;
    }
}