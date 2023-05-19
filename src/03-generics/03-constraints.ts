function len<T extends {length: number}>(arg: T): number {
    return arg.length;
}
len('abc')
len(['abc'])
len({length: 12})
//len(123)
//len(true)
const obj1 = {a: 1}
//len(obj1)

const obj2 = {a: 1, length: 1}
len(obj2)


//object
function lenO<T extends object>(arg: T): number {
    return arg.length;
}