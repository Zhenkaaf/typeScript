"use strict";
let word = null;
const num = 10;
if (num > 5) {
    word = 'asd';
}
console.log(word.toLowerCase());
function printName(name) {
    const fullMame = name;
}
function printName2(person) {
    console.log(person.name);
}
const people = [
    {
        name: 'Gran',
        age: 70,
        sex: 'female'
    },
    {
        name: 'Kris',
        age: 26,
        sex: 'female'
    },
    {
        name: 'Fil',
        age: 7,
        sex: 'male'
    },
];
const femalePeople = people.find(person => person.sex === 'female');
// ! - точно будет значение, не будет undefined
