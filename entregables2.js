// Bucles (hacer algo una y otra vez).
//Existen 3 elementos que controlan el flujo de ejecucion del bucle(Inicializacion, Condicion de permanencia, actualizacion de la variable que controla esa condicion).

//While
let condicion

while(condicion) {
    codigo
}
//Ejemplo:

let i = 1
while(i < 11) {
    console.log(i);
    i++;
}
// Otro Ejemplo.

function bucleWhile(num) {
    let i = 0;
    while(i < num) {
        console.log(i);
        i++;
    }
}

bucleWhile(11);

//DoWhile.

function doWhile(num) {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while(i< num);
}

doWhile(11);

//For.

for(inicializacion; condicion; actualizacion) {

}

//Ejemplo de For.

function bucleFor(num) {
    for(let i=0; i<num; i++) {
        console.log(i);
    }
}

bucleFor(11);

//Array es una estructura de datos donde se puede almacenar diversos datos, variables, etc (Es como los bolsillos de una maleta).

const array = [];
array[0] = "1";
array[1] = "2";

//Otra forma de construir arrays.

 const array = Array(10000);

 //Ejemplo: Buenas practicas.

 const obj = {
     unArray: new Array(10000)
 };

 for(let i=0; i<obj.unArray.length; i++) {
     obj.unArray[i] = 'Hola';
 }

 //puede ser asi.

 const obj1 = {
    unArray: new Array(10000)
};

let longitud = obj1.unArray.length

for(let i=0; i<longitud; i++) {
    obj.unArray[i] = 'Hola';
}

//O para que se vea mas elegante asi.

const obj2 = {
    unArray: new Array(10000)
};

for(let i=0, longitud2 = obj2.unArray.length; i<longitud; i++) {
    obj.unArray[i] = 'Hola';
} //por que se coloca una 'coma' (,)?

//Otro ejemplo accediendo al array dentro del bucle

const obj3 = {
    unArray: new Array(10000)
};

const unArray = obj3.unArray

for(let i=0, longitud3 = unArray.length; i<longitud; i++) {
    obj.unArray[i] = 'Hola';
} //De esta forma su optimizacion es mas rapida y se realiza mas rapido.

const obj4 = {
    unArray: new Array(10000)
}

function badPerformance() {
    console.time("bad");
    for(let i=0; i<obj4.unArray.length; i++) {
        obj.unArray[i] = 'Hola';
    }
    console.timeEnd('bad');
}

function goodPerformance() {
    console.time("good");
    let unArray = obj4.unArray;
    for(let i=0, longitud = unArray.length; i< longitud; i++) {
        unArray[i] = 'Hola';
    }
    console.timeEnd('good');
}

badPerformance();
goodPerformance();

//Otra estructura de bucles mas concreta de js.

const miArray = [1,2,3,4];
miArray.forEach(function(item, index) {
    console.log("El valor de la posicion " +index+ " es: " +item)
}) //O se puede hacer con las `${}`.
//Otro ejemplo
//forEach.
const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "David Granados",
    numPaginas: 200,
    editorial: "7even.es",
    precio: "35.47",
}

const props = Object.getOwnPropertyNames(libro);
props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptor(libro, name).value
   console.log(`La prop ${name} contiene: ${valor}`) 
})

//for in. (nos permite hacer lo mismo, solo que es mas sencillo).

// for (key in object)

const libro2 = {
    titulo: "Aprendiendo JavaScript",
    autor: "David Granados",
    numPaginas: 200,
    editorial: "7even.es",
    precio: "35.47",
}

for (let prop in libro2) {
    console.log(`La prop ${prop} contiene: ${libro[prop]}`)
}
