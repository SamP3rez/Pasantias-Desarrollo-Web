// Clousures.

const saludar = function(nombre) {
    return "Hola " + nombre;
}

saludar("Carlos");

//Las funciones pueden tener otras funciones dentro de ellas.

const a = "Hey!";
function global() {
    const b = "Que";
    function local() {
        const c = "tal?"
        return a + b +c;
    }
    return local
}

global();
global()();
const closure = global();
closure(); //Estas son funciones anidadas.

//Closures. Es una funcion ejecutable que devuelve determinadas variables o funciones.

const miContador = (function() {
    let _contador = 0;

    function incrementar(){
        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
}) (); 

miContador.valor()
miContador.incrementar
miContador.valor()
miContador.decrementar();