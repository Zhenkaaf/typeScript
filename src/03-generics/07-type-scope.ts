export function tuplePairCreator<T>(first: T) {
    return function<U>(second: U): [T, U] {
        return [first, second]
    }
}
const toTupleWith1 =  tuplePairCreator(1);
const val1 = toTupleWith1(2)
const val2 = toTupleWith1('asd')




//Опишите типы для следующей функции

 export function createMap<T>(list: T[]) {
  return function<L>(cb: (x: T) => L): L[] {
    const result = [];
 
    for (let el of list) {
      result.push(cb(el))
    }
 
    return result;
  }
}

const mapNums = createMap([1,2,3])
const result = mapNums((num) => num + 2)

//В каких сущностях мы можем применять дженерики TypeScript.
//Чаще всего в функциях, классах, интерфейсах. Там где нам нужно работать с динамическими параметрами