


//type // иногда называют aliasом

type MyBoolean = false | true;

type Pair = [string, string];
type Pairs = Pair[];

/* interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown; // чтоб можно было добавлять свойства car2.go = true;
}; */

type DiffCar = {
    wheels: number;// можно и запятую ставить
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown; 
};