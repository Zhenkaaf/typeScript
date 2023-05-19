"use strict";
const numbers = [1, 2, 3, 4];
const strs = [];
const strs2 = [];
strs.push('asd');
/* interface Car {
    wheels: number;
    brand: string;
}; */ // какимто образом видит Car из другого файла
const cars = [];
cars.push({ brand: 'Audi', wheels: 4, type: '' });
const arrOfArr = []; //массив строк внутри другого массива
arrOfArr.push(['', '']); // смогу пушить только массивы
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el);
    });
}
