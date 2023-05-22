interface ICar {
    go(speed: number): void,
    //maxSpeed?: number,
}
export class Car implements ICar {
    go(speed: number) {
        console.log('let us go with speed', speed.toFixed());
    }
    stop() {
        console.log('stopped');
    }
}
const car = new Car;
//car.maxSpeed = 200;