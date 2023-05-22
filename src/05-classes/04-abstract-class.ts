abstract class Vehicle1 {
    abstract drive(speed: number): void;
    public stop() {
        console.log('stop');
    }
}
export class Car extends Vehicle1 {
    constructor(public color: string) {
        super();
    }
    drive(speed: number) {
        console.log(speed);
    }
}

//const v1 = new Vehicle1();// abstract** нельзя создавать экземпляры объекта