


//Aliases type
//1. primitives, union, intersections - ok
//type Window = can't be created

//Interfaces
//1. When we want expand interface in future
//2. Class with implements



type Product = {
    price: number;
    isNew: boolean;
    isSale: boolean;
    title: string;
}
type Vehicle = {
    wheels: number;
    year: number;
    brand: string;
}
type Car = {
    type: string;
    model: string;
} & Product & Vehicle

/* type Car = Product & Vehicle &{
    type: string;
    model: string;
} */



interface IProduct {
    price: number | string;
    isNew: boolean;
    isSale: boolean;
    title: string;
}
interface IProduct {
    price: number | string;
    isNew: boolean;
    isSale: boolean;
    title: string;
}
interface IVehicle {
    wheels: number;
    year: number;
    brand: string;
}
interface ICar extends IProduct, IVehicle {
    type: string;
    model: string;
}