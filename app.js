// Primer ejercicio

let frutas = []
console.log(frutas)

frutas = [2, 6, 4, 5, 7, 2, 8, 9 , 1, 4, 3]
console.log(frutas);

// Segundo ejercicio

let texto = "soy, un, string, con, varias, palabras, en, el, mismo, arreglo";
console.log(texto);

let arregloTexto = texto.split(",");
console.log(arregloTexto);

// Tercer ejercicio

let numeros = [10,40,30,20,15,5];

// Ordenar el arreglo de menor a mayor
numeros.sort(function(a, b) {
    return a - b;
});

// Mostrar el número menor y el mayor
console.log("Número menor: " + numeros[0]); // Primer elemento del arreglo ordenado
console.log("Número mayor: " + numeros[numeros.length - 1]); // Último elemento del arreglo ordenado
