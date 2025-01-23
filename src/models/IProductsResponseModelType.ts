// 40). Робимо базову модель продуктів, яких ми отримаємо (<IProductsResponseModelType>).
import {IProduct} from "./IProduct";

export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]

}