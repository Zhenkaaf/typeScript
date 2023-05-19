

export {};

type T0 Exclude<'a'| 'b' |'c', 'a'>;
type T1 Exclude<'a'| 'b' |'c', 'a' | 'b' | 'd'>;
type T2 Exclude<string | number |(() => void), Function>;

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>
type TextStatus = Exclude<Status, number>


type T00 Extract<'a'| 'b' |'c', 'a'>;
type T10 Extract<'a'| 'b' |'c', 'a' | 'b' | 'd'>;
type T20 Extract<string | number |(() => void), Function>;

interface Person {
    age: number,
    firstName: string,
    lastName: string,
    sex: 'male' | 'female',
    country: string,
    education: string,
    skills: string[],
}

type PersonNames = Extract<keyof  Person, 'firsName' | 'lastName' | 'fulName'>;

type T01 = NonNullable<string | number | undefined>;
type T11 = NonNullable<string[] | null | undefined>;

export function keys<O extends object>(obj: O) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key);
    }
    return currentKeys;
}



type Computer100 = {
    brand: string,
    year: number,
    isAvailable: boolean,
  }
  
  type T100 = Extract<keyof Computer100, string>


  type Computer = {
    brand: string,
    year: number,
    isAvailable: boolean,
  }
  
  type T111 = Exclude<keyof Computer, string>