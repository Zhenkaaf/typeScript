"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === "string") {
        x.toLocaleLowerCase();
    }
    else if (typeof x === "number") {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log("no value");
    }
    else {
        console.log(x);
    }
}
function example2(strs) {
    //if (typeof strs === 'object') {} **null
    if (strs && typeof strs === "object" || Array.isArray(strs)) {
        strs.concat([]);
    }
    else if (typeof strs === "string") {
        strs.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getMonth();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
