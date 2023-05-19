
export interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    name?: string;

    [key: string]: unknown; // чтоб можно было добавлять свойства car2.go = true;
};


const car: Car = { // объект обязан соответствовать интерфейсу
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: false,
};
const car2: Car = {
    brand: 'AUDI',
    type: 'SUV',
    wheels: 4,
};
car2.go = true;
//car2['go'] = true; // предпочтительный синтаксис