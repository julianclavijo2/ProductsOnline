import { Productos } from "./productos.model";

export interface Checkout{
  empployeeId:string,
  product:Productos[]
}
