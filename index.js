//1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que sea el resultado de elevar cada número a si mismo. 
const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () => numbers.map(n => n ** n);


//2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const result2 = foodList.map(food => {
    const frases = {
        Pizza: 'Como soy de Italia, amo comer Pizza',
        Ramen: 'Como soy de Japón, amo comer Ramen',
        Paella: 'Como soy de Valencia, amo comer Paella',
        Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
    };
    return frases[food];
});


//- [ ] 3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    { name: 'Pepe', role: 'The Boss', hobbies: ['leer', 'ver pelis'] },
    { name: 'Ana', role: 'becaria', hobbies: ['nadar', 'bailar'] },
    { name: 'Luis', role: 'programador', hobbies: ['dormir', 'comprar'] },
    { name: 'Carlos', role: 'secretario', hobbies: ['futbol', 'queso'] }
];

const result3 = staff.map(p =>
    `${p.name} es ${p.role} y le gusta ${p.hobbies[0]} y ${p.hobbies[1]}`
);

//4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(n => n % 2 !== 0);

//5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];

const genero = {
    'Tempeh': 'rico',
    'Tofu burguer': 'rica'
};

const result5 = foodList2
    .filter(item => item.isVeggie)
    .map(item => `Que ${genero[item.name]} ${item.name} me voy a comer!`);

//6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
    { name: 'Mobile phone', price: 199 },
    { name: 'TV Samsung', price: 459 },
    { name: 'Viaje a Cancún', price: 600 },
    { name: 'Mascarilla', price: 1 }
];

const result6 = inventory
    .filter(item => item.price > 300)
    .map(item => item.name);

//7.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((acum, num) => acum * num, 1);

//8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
    'Me',
    'llamo',
    'Alejandro', // nombre aqui
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const result8 = sentenceElements.reduce((acum, curr) => acum + ' ' + curr);

// 9.- Obtener el monto total de los elementos que pertenecen a catecdgory "code" en el siguiente array.

const books = [
    { name: ' JS for dummies', author: 'Emily A. Vander Veer', price: 20, category: 'code' },
    { name: 'Don Quijote de la Mancha', author: 'Cervantes', price: 14, category: 'novel' },
    { name: 'Juego de tronos', author: 'George R. Martin', price: 32, category: 'Fantasy' },
    { name: 'javascript the good parts', author: 'Douglas Crockford', price: 40, category: 'code' }
];

const result9 = books
    .filter(book => book.category === 'code')
    .reduce((sum, book) => sum + book.price, 0);