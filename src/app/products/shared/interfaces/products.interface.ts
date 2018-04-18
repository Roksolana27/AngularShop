// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   totalPrice?: number;
//   img?: string;
//   quantity?: number;
//   available?: boolean;
// }
export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public totalPrice?: number,
    public img?: string,
    public quantity?: number,
    public available?: boolean,
  ) {

  }
}
