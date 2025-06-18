/*✅ Ejercicio 1

Necesitamos escribir una función que, recibiendo un array con importes,  
nos devuelva el resultado final de la **suma de los importes de todos los meses que tienen ganancia**,  
a excepción de los que **superen un importe de $1.000**.*/

console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 1 *-*-*-*-*-*-*");
let importes = [
  500, 1200, 800, 950, 1100, 700, 300, 400, -510, 600, 2000, 1500, 100,
];

function sumaGanancias(importes) {
  let suma = 0; //inicializamos la variable suma en 0
  // Recorremos el array de importes
  for (let i = 0; i < importes.length; i++) {
    if (importes[i] > 0 && importes[i] <= 1000) {
      suma += importes[i];
    }
  }
  return suma;
}
console.log(
  "El resultado de la suma de los meses de ganancia es de: $",
  sumaGanancias(importes)
);
/*✅ Ejercicio 2
Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:

Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera,  
debemos verificar si el asiento que buscamos está disponible.

Nos piden que escribamos una función que:

- 1.Tome como parámetro un conjunto de asientos disponibles.
- 2.Tome como segundo parámetro el asiento que quiere ocupar la persona.
- 3.Verifique si el asiento solicitado se encuentra disponible.
- 4.Devuelva un mensaje claro al cliente como:

```
"Felicitaciones, el asiento número X está disponible"
```
o
```
"Lo sentimos, el asiento número X está ocupado, pero aún quedan Y asientos disponibles"
```

### 🧩 Ejemplo de uso:

```
asientos([15, 28, 44, 45, 70], 15);
```
*/
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 2 *-*-*-*-*-*-*");
let asientosDisponibles = [
  12, 14, 15, 18, 20, 21, 27, 28, 29, 30, 35, 36, 37, 39, 42, 47, 48, 49, 50,
  55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
];

let asientoSolicitado = 10;

function verificarAsiento(asientosDisponibles, asientoSolicitado) {
  if (asientosDisponibles.includes(asientoSolicitado)) {
    console.log(
      `Felicitaciones, el asiento número ${asientoSolicitado} está disponible.`
    );
    return;
  } else {
    let asientosRestantes = asientosDisponibles.length;
    console.log(
      `Lo sentimos, el asiento número ${asientoSolicitado} no está disponible, pero aún quedan ${asientosRestantes} asientos disponibles para elegir.`
    );
    return;
  }
}
verificarAsiento(asientosDisponibles, asientoSolicitado); // Llamamos a la función para verificar el asiento solicitado

/*✅ Ejercicio 3
Una empresa de trenes nos presenta el siguiente problema:

Un tren va desde una terminal hasta otra, con estaciones intermedias.
La empresa necesita saber cuántos pasajeros lleva el tren luego de cada parada.

### 📌 Requisitos:

Debemos escribir una función que:

- Reciba la cantidad de estaciones que avanzó el tren.

Devuelva un reporte con:

- El número de cada estación recorrida.

- La cantidad total de pasajeros luego de cada parada.

### 🚉 Datos proporcionados:

El tren siempre sale con 200 pasajeros desde la estación 1.

En cada estación normal:

- Suben 50 personas.

- Bajan 30 personas.

- En la estación Olimpo (la estación número 5), como es una estación central es la única donde bajan 80
  personas y suben 120

// 1.  Estación 1: suben 200 pasajeros, bajan 0 pasajeros
// 2.  Estación 2: suben 50 pasajeros, bajan 30 pasajeros
// 3.  Estación 3: suben 50 pasajeros, bajan 30 pasajeros
// 4.  Estación 4: suben 50 pasajeros, bajan 30 pasajeros
// 5.  Estación 5: suben 120 pasajeros, bajan 80 pasajeros
// 6.  Estación 6: suben 50 pasajeros, bajan 30 pasajeros
// 7.  Estación 7: suben 50 pasajeros, bajan 30 pasajeros
// 8.  Estación 8: suben 50 pasajeros, bajan 30 pasajeros
// 9.  Estación 9: bajan todos los pasajeros que quedan en el tren.
//  El tren llega a destino y no quedan pasajeros.
  */
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 3 *-*-*-*-*-*-*-");

function cantidadPasajeros(estaciones) {
  console.log("Reporte de pasajeros por estación: ");
  let pasajeros = 200; // Pasajeros iniciales
  let reporte = []; // Array para almacenar el reporte de pasajeros por estación
  for (let i = 1; i <= estaciones; i++) {
    let mensaje = "";
    if (i === 1) {
      // Estación 1
      mensaje = `Estación ${i}: Suben ${pasajeros} pasajeros. Bajan 0 pasajeros.  |  Total de pasajeros en el tren: ${pasajeros}`;
    } else if (i === 5) {
      // Estación Olimpo
      pasajeros += 120 - 80; // Suben 120 y bajan 80
      mensaje = `Estación ${i}: Suben 120 pasajeros. Bajan 80 pasajeros.  |  Total de pasajeros en el tren: ${pasajeros}`;
    } else if (i === estaciones) {
      // Última estación
      mensaje = `Estación ${i}: Bajan los ${pasajeros} pasajeros del tren. |  El tren llegó a destino.`;
    } else {
      // Otras estaciones
      pasajeros += 50 - 30; // Suben 50 y bajan 30
      mensaje = `Estación ${i}: Suben 50 pasajeros. Bajan 30 pasajeros.  |  Total de pasajeros en el tren: ${pasajeros}`;
    }
    reporte.push(mensaje); // 1. Guardo el mensaje en el array
    console.log(mensaje); // 2. Imprimo el mensaje en consola
  }

  return reporte;
}
cantidadPasajeros(9); // Llamamos a la función para obtener el reporte

/*✅ Ejercicio 4
### 🧪 Ejercicio: FizzBuzz con `for` y `while`

Definí una función `fizzBuzz(max)` que tome un número como parámetro e **imprima por consola** cada número desde el **0 hasta `max` (sin incluirlo)** que sea:

- divisible por **3 o 5**,
- **pero no por ambos al mismo tiempo**.

#### Requisitos:

1. Hacerlo primero usando un **bucle `for`**.
2. Luego, hacerlo con un **bucle `while`**
*/
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 4 *-*-*-*-*-*-*");
let max = 100; // Definimos el valor máximo

function fizzBuzzWhile(max) {
  console.log("///FizzBuzz con bucle while:///");
  let i = 0;
  while (i < max) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
    i++;
  }
}

function fizzBuzzFor(max) {
  console.log("///FizzBuzz con bucle for:///");
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
}

fizzBuzzWhile(max); // Llamamos a la función con bucle while
fizzBuzzFor(max); // Llamada a la función con bucle for

/*✅ Ejercicio 5
Una empresa de transporte nos pide que desarrollemos una función que calcule el costo
de un viaje en taxi, teniendo en cuenta los siguientes datos:
- El costo de la bajada de bandera es de $100.
- El costo del kilómetro recorrido es de $50.
- El costo del tiempo de espera es de $10 por minuto.
- El tiempo de espera se calcula como el tiempo que el taxi está esperando al pasajero.
### 🧩 Ejemplo de uso:
```
costoViaje(5, 10);
```
- 5 kilómetros recorridos.
- 10 minutos de espera.

*/
console.log("-*-*-*-*-*-*-*-*-*-*Ejercicio 5 *-*-*-*-*-*-*");

let bajadaBandera = 100; // Costo de la bajada de bandera
let costoKm = 50; // Costo del kilómetro recorrido
let kmRecorridos = 5; // Kilómetros recorridos
let tiempoEspera = 10; // Minutos de espera
let costoEspera = 10; // Costo del tiempo de espera por minuto

function costoTaxi() {
  let costoTotal =
    bajadaBandera + costoKm * kmRecorridos + costoEspera * tiempoEspera;
  console.log(`El costo total del viaje en taxi es de: $${costoTotal}`);
  return costoTotal;
}
costoTaxi(); // Llamamos a la función para calcular el costo del viaje en taxi
