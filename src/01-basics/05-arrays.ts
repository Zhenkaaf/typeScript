


const numbers = [1,2,3,4];

const strs: string[] = [];
const strs2: Array<string> = [];
strs.push('asd');


/* interface Car {
    wheels: number;
    brand: string;
}; */ // какимто образом видит Car из другого файла
const cars: Car[] = [];
cars.push({brand: 'Audi', wheels: 4, type: ''});


const arrOfArr: string[][] = [];//массив строк внутри другого массива
arrOfArr.push(['',''])// смогу пушить только массивы


function printArr(arr: unknown[]): void {
    arr.forEach((el, index, array) => {
        console.log(el);
    })
}
