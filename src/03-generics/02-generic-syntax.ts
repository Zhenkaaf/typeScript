// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T // возвращает Т /может быть много параметров <T, R>

type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>


export function toArray<T>(...arg: T[]): T[] {
    return arg;
}
toArray(1,2,3);
toArray('ad','asd');




function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;

function head(value: any): any {
  return value[0];
}
head(['12d', 'asdf']);


const head1 = <T>(value: T[]): T => value[0]






interface ModelData<T> {
    title: string,
    value: T, //number [] boolean
}

const obj1: ModelData<number> = {
    title: 'asd',
    value: 12
}

//obj1.value = true
const obj2: ModelData<Array<number>> = {
    title: '12asd',
    value: [12]
}








function append<T>(el: T, list: T[]): T[] {
    return list.concat(el);
  }
  append(1, [123, 123])
  append('1', [123,123]) //несоответствие типов