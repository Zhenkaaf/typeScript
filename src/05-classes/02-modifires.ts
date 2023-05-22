export class Vehicle {
    public drive(speed: number): void {
        console.log('let us', speed.toFixed());
        this.log(speed);
    }
    public stop() {
        console.log('stop');
    }
    private log(speed: number) {
        console.log('vehicle has changed speed to', speed);
    }
    protected alternativeLog(text: string) {
        console.log(text.toUpperCase);
    }
}

class Car extends Vehicle {
    public changeSpeed(speed: number) {
        this.drive(speed);
        //this.log(555);не доступно
        this.alternativeLog('speed was changed');
    }
}

const car1 = new Car();
car1.drive(55);
car1.stop();
//car1.log(33);//private