// Introduccion al Desarrollo Web.

//Variables (Espacios reservados de memoria, donde almacenamos informacion)
// (let) Se utiliza esta palabra reservada para definir una variable.
let dato = 4
console.log(dato);

//Tipos de datos: (Number, String, Boolean y Undefined)

let miNumero = 1
typeof(miNumero)

let miString = "Hola Mundo"
typeof(miString)

let miBooleano = false
typeof(miBooleano)

let dato1
typeof(dato)

//Operadores

let suma = 5 + 5
suma;

let resta = 3 - 2
resta;

let division = 3/3
division;

let multiplicacion = 5 * 10
multiplicacion;

let potencia = 3 ** 3
potencia;

//El operador suma tambien sirve para agrupar o concatenar string.

let frase = "hola" + " mundo " + "!"
frase

//En JS tambien existen operadores 'pos' y 'pre' incremento/ decremento.

let x = 1
x
let y = ++x //Este es un ej. de preincremento.
y //va a valer 2
x // tambien va a valer 2

let z = x++ //Este es un ej. de pos-incremento.
z //va a valer lo que vale x++.
x //va a realizar su posincremento y vale 3.

//Funciona igual con el decremento.

//Operadores Booleanos (true y false).
//El primer operador booleano es el de negacion.
!true
!false //Esto indica lo contrario.

!!true
!!false //Estos vuelven al estado original.

//Operadores de igualdad que se escriben (===).
true === true

//Operadores de distinto (!==).
true !== false

//Se pueden realizar comparaciones utilizando (<, >, <=, >=)
6 > 3
"a" < "b"

//Operadores logicos AND (&&) y OR (||).

true && false && true && true

false || false || true || false

//CONDICIONALES 

//Sentencia IF 

let operacion = 5 + 1;

if (operacion > 7) {
    console.log("Es mayor a 7");
}
else if(operacion < 7 && operacion > 2){
    console.log("Esta entre 7 y 2")
}
else {
    console.log("Es menor de 2")
}

//Cuando hay diferentes casos que queremos comprovar se utiliza la sentencia switch.
//Sentencia SWITCH.

let operacion = 5 + 2

switch(operacion) {
    case 0:
        console.log("El resultado es 0");
        break;
    case 7:
        console.log("El resultado es 7");
        break;
    default:
        console.log("El resultado no es ni 0 ni 7")
}


//Funciones

function saludar(nombre) {
    return `Hola ${nombre}`
}

saludar ("Carlos")
//Como se hacia antiguamente.

function Inventario(nombre) {
    this.nombre = nombre;
    this.articulo = [];
}
Inventario.prototype.getNombre = function() {
    return this.nombre;
}
Inventario.prototype.add = function(articulo, cantidad) {
    this.articulos[articulo]
}

let libros = new Inventario('libros');
libros.getNombre()
libros.add("Aprendiendo JavaScript", 5);
libros.cantidad('Aprendiendo JavaScrip');

//Como se hace actualmente.

class Inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulos = [];
    }

    getNombre() {
        return this.nombre;
    }

    add(articulo, cantidad) {
        this.articulos[articulo] = cantidad;
    }

    cantidad(articulo) {
        return this.articulos[articulo]
    }
}

let libros = new Inventario('libros');
libros.getNombre()
libros.add("Aprendiendo JavaScript", 5);
libros.cantidad('Aprendiendo JavaScrip');