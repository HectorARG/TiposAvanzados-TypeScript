// Para enviar un parámetro opcional usamos el nullish
// coalescing, sin embargo para enviar parámetros por
// defectos solo basta con igualarlo a la variable que
// queremos que tenga, si el usuario no nos indica el parámetro.


export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);

const p4 = createProduct(1, true, 100);
console.log(p4);

const p5 = createProduct(5, false);
console.log(p5);
