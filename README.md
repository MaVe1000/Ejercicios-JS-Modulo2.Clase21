# Ejercicios-JS-Modulo2.Clase21

Son resoluciones a ejercicios de JavaScript utilizando bucles For y While.

## Resolución a los siguientes ejercicios:

---

## ✅ Ejercicio 1

Necesitamos escribir una función que, recibiendo un array con importes,  
nos devuelva el resultado final de la **suma de los importes de todos los meses que tienen ganancia**,  
a excepción de los que **superen un importe de $1.000**.

---

## ✅ Ejercicio 2

Una cadena de cines nueva quiere desarrollar su página web, y nos presentó la siguiente situación:

Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera,  
debemos verificar si el asiento que buscamos está disponible.

Nos piden que escribamos una función que:

- Tome como parámetro un conjunto de asientos disponibles.
- Tome como segundo parámetro el asiento que quiere ocupar la persona.
- Verifique si el asiento solicitado se encuentra disponible.
- Devuelva un mensaje claro al cliente como:

```
"Felicitaciones, el asiento número X está disponible"
```

o

```
"Lo sentimos, el asiento número X está ocupado, pero aún quedan Y asientos disponibles"
```

### 🧩 Ejemplo de uso:

```js
asientos([15, 28, 44, 45, 70], 15);
```

---

## ✅ Ejercicio 3

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

---

## ✅ Ejercicio 4

### 🧪 Ejercicio: FizzBuzz con `for` y `while`

Definí una función `fizzBuzz(max)` que tome un número como parámetro e **imprima por consola** cada número desde el **0 hasta `max` (sin incluirlo)** que sea:

- divisible por **3 o 5**,
- **pero no por ambos al mismo tiempo**.

#### Requisitos:

1. Hacerlo primero usando un **bucle `for`**.
2. Luego, hacerlo con un **bucle `while`**

---

## ✅ Ejercicio 5

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
