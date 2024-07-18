//En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
//determinar cuál es alguno de los nombres del personal que gana menos (si no se repite, sólo 
//reportar 1, si se repite, reportar cualquiera) y también el monto promedio pagado sólo los 
//administrativos. 
//Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
//el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
//$50, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
//gana $150:
import Empleados from "./Empleados.js";
import Empresa from "./Empresa.js";

let empresa = new Empresa();
let emp1=  new Empleados("Juan","obrero",100);
let emp2=  new Empleados("Ana","obrero",50);
let emp3=  new Empleados("Lin","administrativo",200);
let emp4=  new Empleados("Mary","obrero",50);
let emp5=  new Empleados("Carlos","administrativo",150);

empresa.procesarempleados(emp1);
empresa.procesarempleados(emp2);
empresa.procesarempleados(emp3);
empresa.procesarempleados(emp4);
empresa.procesarempleados(emp5);

let salida = document.getElementById("salida");
salida.innerHTML += "resultado:" + "<br>";
salida.innerHTML += "la que gana menos es : "+ empresa.devolvermenor()+ "<br>";
salida.innerHTML += "monto promedio : $"+ empresa.promediosueldo();