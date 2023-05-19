"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = exports.tuplePairCreator = void 0;
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreator = tuplePairCreator;
const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1(2);
const val2 = toTupleWith1('asd');
//Опишите типы для следующей функции
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
//В каких сущностях мы можем применять дженерики TypeScript.
//Чаще всего в функциях, классах, интерфейсах. Там где нам нужно работать с динамическими параметрами
