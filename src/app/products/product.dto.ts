// Es una abreviatura para referirnos a
// Data Transfer Objects u Objeto de
// Transferencias de datos.
// Hay momentos particulares en los que nosotros no
// necesitamos del todo los tipos, es decir, hay
// parámetros que no hacen falta, por ejemplo, mandarlos
// al momento de la creación de un objeto, ya que estos
// son automáticos como el ID o la fecha de creación.

import { Product } from './product.model';

// Omit
// Con omit podemos omitir las propiedades,
// campos o llaves que quieramos.
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

// Pick
// Es lo contrario de Omit, aquí yo elijo
// los campos que quiero que estén en mi type o interface.
type example = Pick<Product, 'color' | 'description'>;

// Partial
// Nos permite colocar todos los parámetros de una
// interface como opcionales, sin necesidad que
// colocar ? parámetro por parámetro.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required
// Nos permite colocar todos los parámetros
// de una interface como obligatorios.
type example2 = Required<Product>;

// Anidamiento de utility types
// Podemos utilizar el anidamiento para poder fusionar las distintas características de los diferentes utility types.
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // ¿Qué hace ReadonlyArray?
// Tenemos muchos métodos de array que nos permiten mutar un array, pero en programación,
// en general, se evita hacer mutaciones en un array por lo que se prefiere crear nuevos
// estados para evitar efectos secundarios.
// Para evitar estas mutaciones es que utilizamos a ReadonlyArray como un tipo de dato más.
  readonly tags: ReadonlyArray<string>;
}

// Readonly
// Con esta propiedad le decimos TypeScript que
// todos los parámetros solamente sean de lectura,
// por ende nos pueden ser mutados a lo largo de nuestro programa.
type example3 = Readonly<Product>;
