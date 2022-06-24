//Tipos de Datos. 
//Clases core (forman el nucleo de JS). Las que + se utilizan (object, number, array y string).
//Object

const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "David Granados",
    numPaginas: 200,
    editorial: "7even.es",
    precio: "35.47",
}

libro.titulo
libro["numPaginas"] // Se pueden llamar de las 2 formas.
libro.titulo = "Desarrollo Web con React"
libro.titulo//se midifico.
//Los valores de una propiedad de un objeto pueden ser modificables.

const libro = {
    titulo: "Aprendiendo JavaScript",
    autor: "David Granados",
    numPaginas: 200,
    editorial: "7even.es",
    precio: "35.47",
    leer: function() {
        console.log("He leido el libro")
    }
}

let pages = "numPaginas";
libro[pages]
libro.pages //no se puede.
libro.leer()

//Para crear un objeto hay dos formas. 

let libro = {}
libro.titulo = "lsjfkldj"

// O de esta forma.

let libro2 = new Object({ titulo: "kflsdjfls"});
libro.titulo;

//Varios niveles. Ej:
 let libro= {
     titulo: "Aprendiendo JavaScript",
     autor: {
         nombre: 'David Granados',
         edad: 52,
         redes: {
             facebook: "facebook.com/tuchicoguapoDG",
             tiktok: "tiktok.com/@ElpapadelosHelados",
         }
     }
 }

 libro.autor.nombre
 libro['autor']['redes']['tiktok']

 //

 const carro1 = { marca: "Tesla", modelo: "X" }
 const carro2 = { marca: "Tesla", modelo: "X" }
 carro1 === carro2
 carro1.marca === carro2.marca
 //para que compartan referencia
 const carro3 = carro1
 carro3 === carro1

 //Number
25
25.5
0x1F
0xFF
5.4e2 //coma flotante.

1 / 0 //valor infinito -1 / 0
1e1000 //tambien va a devolver infinito.
"a" / 15 //NaN (no es un numero, no tiene solucion)
//

parseInt("15")
parseFloat("5e3")

//para redondear
let n = 2.5647;
n.toFixed(2);
//Me perdi :/

//Clase Math (Para operaciones matematicas)

//Clase Array.

//Clase String.

"javascript"[2]
"javascript".length
"javascript".charCodeAt(2)
"javascript".indexOf("string")
"javascript".substring(2, 4);

//se pueden crear pasando el valor directamente a la variable.
 let texto = "Hola"
 let text = new String("Hola")
 // Ej:

 const fecha = new Date()
 fecha.toString().split(" ")[4].split(":")[0];