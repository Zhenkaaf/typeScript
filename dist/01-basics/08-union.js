"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staticX = "loading";
const arr = [];
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase);
    }
    else {
        console.log(id);
    }
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log("helllo", person.join(" "));
        return 1;
    }
    else {
        console.log("hello", person);
        return person;
    }
}
// create a function that change level of incoming developer
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
}
const dev1 = {
    level: 'junior',
    login: 'kris',
    skills: ['js, ts'],
};
gradeDeveloper(dev1, 'middle');
