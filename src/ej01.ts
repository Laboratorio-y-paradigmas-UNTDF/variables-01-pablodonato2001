// Ejercicio 1 — L-value y R-value: variables como contenedores (20 pts)
// Trazabilidad: OA1 — F-01, F-02, F-03
//
// Un L-value es una posición de memoria que puede RECIBIR una asignación.
// Un R-value es el CONTENIDO leído desde esa posición.
// Todas las funciones de este ejercicio modifican el array original (in-place).

// 1a. Intercambia arr[i] y arr[j] en el array (in-place, 5 pts).
// Las posiciones arr[i] y arr[j] actúan como L-values al recibir la asignación.
// No retorna nada — modifica el array original.
export function swap<T>(arr: T[], i: number, j: number): void {
   const temp = arr[i]; // R-value: lee el valor de arr[i]
    arr[i] = arr[j]; // L-value: asigna el valor de arr[j] a arr[i]
    arr[j] = temp; // L-value: asigna el valor de temp a arr[j]
}

// 1b. Rota el array una posición hacia la izquierda (in-place, 5 pts).
// El primer elemento pasa al final: [1, 2, 3, 4] → [2, 3, 4, 1]
// Si el array tiene 0 o 1 elementos, no hace nada.
export function rotateLeft<T>(arr: T[]): void {
  // No hace nada si el array tiene 0 o 1 elementos
  if (arr.length <= 1) return; 
  const Primero = arr[0];// R-value: lee el primer elemento del array
  // Resto del array se desplaza una posición a la izquierda
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // L-value: asigna el valor de arr[i + 1] a arr[i]
  }
  // El primer elemento se coloca al final del array
  arr[arr.length - 1] = Primero;
}

// 1c. Duplica cada elemento del array numérico (in-place, 5 pts).
// Lee el valor (R-value), lo duplica y lo escribe de vuelta en la misma posición (L-value).
// [1, 2, 3] → [2, 4, 6]
export function doubleAll(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2; // L-value: asigna el valor duplicado a arr[i]
  }
}

// 1d. Reemplaza todas las ocurrencias de oldVal por newVal en el array (in-place, 5 pts).
// Retorna la cantidad de reemplazos realizados.
// findAndReplace([1,2,1,3,1], 1, 9) → modifica a [9,2,9,3,9] y retorna 3
export function findAndReplace<T>(arr: T[], oldVal: T, newVal: T): number {
  let count = 0; // Contador de reemplazos
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldVal) { // R-value: lee el valor de arr[i] para comparar con oldVal
      arr[i] = newVal; // L-value: asigna newVal a arr[i]
      count++; // Incrementa el contador de reemplazos
    }
  }
  return count; // Retorna la cantidad de reemplazos realizados
}
  