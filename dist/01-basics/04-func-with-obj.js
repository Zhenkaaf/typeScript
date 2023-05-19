"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
function printPoint(point) {
    console.log(`coordinate x: ${point.x} y: ${point.y}`);
}
;
const obj1 = {
    x: '1',
    y: '2',
};
printPoint(obj1);
const obj2 = {
    x: '1',
    y: '2',
    z: '4',
};
printPoint(obj2); //можно передать больше параметров чем функция принимает
function printName(user) {
    console.log('Hello', user.firstName.toUpperCase());
    if (user.lastName) {
        console.log('Nice to meet you', user.lastName.toUpperCase());
    }
}
;
printName({ firstName: 'Kris' });
printName({ firstName: 'Kris', lastName: 'Nep' });
;
const user1 = {
    login: 'kris',
    email: 'kris@gmail.com',
    password: 'kris',
    isOnline: true,
    lastVisited: new Date(2023, 5, 14),
};
;
function login(data) {
    console.log(data);
    if (data.login.length > 0 && data.password.length > 0) {
        console.log('ok');
    }
}
exports.login = login;
;
login(user1);
