export {};
type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

const myBrands: BrandNames = {
    apple: '',
}

interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number,
}
type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>
const todo1: SimpleTodo = {
    id: 'asd',
    title: 'learn TS',
    completed: false
}

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>

type NewTodo = Pick<Todo, 'title' | 'description'>





/* Как необходимо описать тип CountriesByRegion для корректной типизации?

type Regions = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

type CountriesByRegion = any

const visitedCountries: CountriesByRegion = {
  Africa: ['Egypt', 'Angola', 'Tunis'],
  America: ['Mexico'],
  Asia: ['India'],
  Europe: ['Spain', 'England', 'Hungary'],
  Oceania: []
}

Record<Regions, string[]>
Record<string, Regions>
Pick<Regions, string[]>
Record<string[], Regions> */





