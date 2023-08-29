export class Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    amount: number;

    constructor () {
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.url = '';
        this.description = '';
        this.amount = 0;
    }
}

/* The `export interface Product` is defining a TypeScript interface called `Product`. An interface in
TypeScript is a way to define the structure of an object. In this case, the `Product` interface has
several properties such as `id`, `title`, `price`, `category`, `description`, `image`, and `amount`,
each with its own data type. */
// export interface Product {
//     id: number;
//     title: string;
//     price: string;
//     category: string;
//     description: string;
//     image: string;
//     amount: number;
// }

// export interface CartProduct {
//     product: Product;
//     amount: number;
// }