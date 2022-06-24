//ES6 y mas
//Funcionalidades y caracteristicas de JavaScript.

//Templates literal
 const nombre = "Samuel"
 const apellido = "Perez"

 console.log(nombre + " " + apellido);
 console.log(`${nombre} ${apellido}`)// Para cuando haya muchas variables es bueno utilizar esta, ya que no se hace tan complicado 

 //Acortadores de nombres en JS

 const nombre1 = "Samuel";
 const edad = 22;
 const facebook = 'https://facebook.com/samuelperez';


 const persona = {
     //nombre: nombre,
     //edad: edad,
     //facebook: facebook,
     nombre,
     edad,
     facebook,
 }

 console.log(persona)

 //funcion flecha.

 function nombreDeLaFuncion () {
     return "Hola";
 }

 const funcionFlecha = () => "Hola"

 nombreDeLaFuncion();
funcionFlecha();
