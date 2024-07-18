export default class Empresa {
    constructor() {
        this.menorsuel=10000;
        this.contempl=0;
        this.acumsuel=0;
        this.auxnombre="";
        
    }
    procesarempleados(emple) {
     if (emple.sueldo < this.menorsuel) {
          this.menorsuel=emple.sueldo; 
          this.auxnombre=emple.nombre;
        
        } 


        if (emple.tipo=="administrativo") {
         this.contempl++;
          this.acumsuel+=emple.sueldo;
    }
        
    }
    promediosueldo() {
        return this.acumsuel/this.contempl;
    }
    devolvermenor() { 
        return this.auxnombre;
    }

}