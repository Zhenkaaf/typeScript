"use strict";
// Array<string>
// string[]
// Promise<number>
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
function toArray(...arg) {
    return arg;
}
exports.toArray = toArray;
toArray(1, 2, 3);
toArray('ad', 'asd');
function head(value) {
    return value[0];
}
head(['12d', 'asdf']);
const head1 = (value) => value[0];
const obj1 = {
    title: 'asd',
    value: 12
};
//obj1.value = true
const obj2 = {
    title: '12asd',
    value: [12]
};
function append(el, list) {
    return list.concat(el);
}
append(1, [123, 123]);
append('1', [123, 123]); //несоответствие типов
