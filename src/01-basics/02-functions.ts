


function sum(a: number, b: number): number {
    return a + b;
};
const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
    return a + b;
};
sum(2, 4);


function log(name: string, userId?: string): void { // ? - не только стринг но и undefined       void - когда функция ничего не возращает
    console.log('Helllo', name, 'with ID', userId || 'anonym');
};
log('Kris', '123');


function crash(): never { // never - функция не завершиться
    throw new Error('crash');
};


export function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
};



function slice(str: string, start: number, end?: number): string {
    let newStr = '';
   
    let lastIndex;
   
    if (end) {
      lastIndex = end > str.length ? str.length : end;
    } else {
      lastIndex = str.length;
    }
   
    for (let i = start; i < lastIndex; i++) {
      newStr += str[i];
    }
   
    return newStr;
  }