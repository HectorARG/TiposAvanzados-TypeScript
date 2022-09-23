// ¿Qué hace ReadonlyArray?
// Tenemos muchos métodos de array que nos permiten mutar un array, pero en programación,
// en general, se evita hacer mutaciones en un array por lo que se prefiere crear nuevos
// estados para evitar efectos secundarios.
// Para evitar estas mutaciones es que utilizamos a ReadonlyArray como un tipo de dato más.
const numbers: ReadonlyArray<number> = [1,2,2,2];
// numbers.push(9);
// numbers.pop();
// numbers.unshift(1);
numbers.filter(()=> {})
numbers.reduce(() => 0)
numbers.map(() => 0)
