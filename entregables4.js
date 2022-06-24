//Arrays y Metodos
// 7 Funciones con propiedades que se va a utilizar dia a dia

const posts = [{
    id: 1,
    title: 'Mi primer post',
    image: 'https://img.com/1',
    tags: ['javascript', 'webdevelopment'],
},{
    id: 2,
    title: 'Mi experiencia con React',
    image: 'https://img.com/2',
    tags: ['javascript', 'webdevelopment', 'react'],
}, {
    id: 3,
    title: 'Por qué dejé Angular',
    image: 'https://img.com/3',
    tags: ['javascript', 'webdevelopment', 'angular'],
}] 

//Para no repetir el código, simplemente escribiré cómo se realiza cada uno, pero todos los metodos de abajo están basados a los arrays de arriba.

posts.find(post => post.title == 'Por qué dejé Angular');// tambien se puede encontrar por "id".

//Metodo "some" nos va a devolver 'true' o 'false' dependiendo de si exciste o no.

posts.some(post => post.id === 4)// False.
posts.some(post => post.id === 1)//True.

//Esto se puede combinar con otra caracteristima mas 'includes'.

posts.some(post => post.tags.includes('vue')) //Va a devolver Falso.
posts.some(post => post.tags.includes('react'))//True, porque si esta.

//Metodo "every" esparecido a "some" solo que este tambien comprueba si esta en todas.

posts.every(post => post.tags.includes('react'))//Responde false, porque solo esta en uno solo.
posts.every(post => post.tags.includes('javascript'))// Responde true, porque si se encuentra en todas.

//Tambien se puede filtrar (En los Arrays).

posts.filter(post => post.tags.includes('angular'))

//Metodo Reduce. Es para incluir todas los arrays que estamos utilizando.

posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags];
}, []) //todas van a aparecer repetidas si se realizan de esa forma.

//Si se quiere que no aparezca repetidos se utiliza el nuevo operador "Set".

posts.reduce((allTags, post) => {
    return Array.from(new Set([...allTags, ...post.tags]));
}, [])

//Y si es muy complicado de esa forma, se puede colocar el metodo 'filter' y se concatenan.
posts.reduce((allTags, post) => {
    return [...allTags, ...post.tags];
}, []), filter((post, index, self) => index === self.indexOf(post))
