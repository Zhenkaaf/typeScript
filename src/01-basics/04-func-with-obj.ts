


function printPoint(point: { x: string, y: string }): void {
    console.log(`coordinate x: ${point.x} y: ${point.y}`);
};

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
printPoint(obj2);//можно передать больше параметров чем функция принимает


function printName(user: { firstName: string, lastName?: string }): void {
    console.log('Hello', user.firstName.toUpperCase());
    if (user.lastName) {
        console.log('Nice to meet you', user.lastName.toUpperCase());
    }
};
printName({ firstName: 'Kris' });
printName({ firstName: 'Kris', lastName: 'Nep' });





interface User {
    login: string;
    email: string;
    password: string
    isOnline: boolean;
    lastVisited: Date;
};
const user1: User = {
    login: 'kris',
    email: 'kris@gmail.com',
    password: 'kris',
    isOnline: true,
    lastVisited: new Date(2023, 5, 14),
};

interface Admin {
    login: string;
    email: string;
    password: string
    isOnline: boolean;
    lastVisited: Date;
    role: string;
};
export function login(data: { login: string, password: string }) {
    console.log(data);
    if (data.login.length > 0 && data.password.length > 0) {
        console.log('ok');
    }
};
login(user1);