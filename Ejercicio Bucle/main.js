
//Ejercicio 1

// function tablaMultiplcar(number){

//         for(let i = 1 ; i <= 10 ; i++) {
//             console.log( `${number} 7x ${i} = ${number * i}`)
//         }
//  }

 //Ejercicio 2

//  let suma = 0;
//  let numero = parseInt(prompt("Ingrese un número (0 para salir):"));
 
//  while (numero !== 0) {
//    suma += numero;
//    numero = parseInt(prompt("Ingrese otro número (0 para salir):"));
//  }
 
//  console.log("La suma total es: " + suma);
 

// //Ejercicio 3
// let sumaAnterior = suma;

// if (sumaAnterior > 0 && sumaAnterior < 100) {
//   let numeroSuma;
//   do {
//     numeroSuma = parseInt(prompt("Ingresa el resultado de la suma de los números ingresados"));
//   } while (suma !== numeroSuma);
// }

// // Ejercicio 4

//  let numeroDivisible = parseInt(prompt("Ingrese un número para ver sus divisores:"));


// for (let i = 1; i <= numeroDivisible; i++) {
//   if (numero % i === 0) {
//     console.log(i);
//   }
// }


// // Ejercicio 5

// let hermanos = ["Camila", "Jaime", "Juan Manuel", "Pablo", "Francisco", "Carlos", "Claudio", "Alejandra", "Karla", "Tatiana"];

// console.log("Mis herman@s son: " + hermanos.join(", "));


// //Ejercicio 6

// let numberArray = [0,1,2,3,4,5,6,7,8,9]

// for(let list of numberArray){
//     console.log(list*2 )
// }
 

// Ejercicio 7

// let Family = [
//     {
//         name: "Carlos",
//         lastName: "Peldoza",
//         birthday: "1944-03-09",
//         city:"Linares"

//     },
//     {
//         name: "Elena",
//         lastName: "Ibarra",
//         birthday: "1956-01-19",
//         city:"Curicó"

//     },
//     {
//         name: "Jaime",
//         lastName: "Peldoza",
//         birthday: "1986-08-17",
//         city:"Talca"

//     },
//     {
//         name: "Elena",
//         lastName: "Peldoza",
//         birthday: "1988-08-09",
//         city:"Constitución"

//     },
//     {
//         name: "Camila",
//         lastName: "Peldoza",
//         birthday: "1989-10-01",
//         city:"Constitución"

//     }
    
// ]

// for (let person of Family) {
//     console.log(`Hola, mi nombre es ${person.name} ${person.lastName}. Nací el ${person.birthday} en la ciudad de ${person.city}.`);
//   }


// //Ejercicio 9
// let numberArrayy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of numberArrayy) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
// }

// //ejercicio 10


// let numeroAsumar;
// let sumaPares = 0;
// let sumaImpares = 0;

// do {
//   numeroAsumar = parseInt(prompt("Ingrese un número (Con 0 se detiene):"));

//   if (numeroAsumar !== 0) {
//     if (numeroAsumar % 2 === 0) {
//       sumaPares += numeroAsumar;
//     } else {
//       sumaImpares += numeroAsumar;
//     }
//   }
// } while (numeroAsumar !== 0);

// console.log("La suma de los números pares es: " + sumaPares);
// console.log("La suma de los números impares es: " + sumaImpares);



// // Ejercicio 11

// let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maxNumber = numberArray[0];

// for (let i = 1; i < numberArray.length; i++) {
//   if (numberArray[i] > maxNumber) {
//     maxNumber = numberArray[i];
//   }
// }

// console.log("El número más grande es: " + maxNumber);


