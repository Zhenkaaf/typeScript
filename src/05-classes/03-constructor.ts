class Vehicle {
    //private createdAt: Date;
    constructor(private createdAt: Date) {}
    public drive(speed: number): void {
        console.log('let us', speed.toFixed());
        this.log(speed);
    }
    public stop() {
        console.log('stop');
    }
    private log(speed: number) {
        console.log('vehicle has changed speed to', speed, this.createdAt);
    }
    protected alternativeLog(text: string) {
        console.log(text.toUpperCase);
    }
}



/* export class Car extends Vehicle {
    public color: string;
    public maxSpeed: number;

    constructor(color: string, maxSpeed: number) {
        super();
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
} */

export class Car extends Vehicle {
    //public color: string;
    //public maxSpeed: number;

    constructor(public readonly color: string, public maxSpeed: number) {
        super(new Date());
        //this.color = color;
        //this.maxSpeed = maxSpeed;
    }
    getInfo() {
        console.log(
            this.color,
            this.maxSpeed,
            //this.createdAt private*
        );
    }
}


const car1 = new Car('red', 200);
//car1.color = 'green';






//Добавьте типы для классов. Используйте короткую запись для конструктора и сделайте метод log недоступным для инстансов обоих классов.



export class Rectangle {
  constructor(public width: number, public height: number) {
    //this.width = width;
    //this.height = height;
    this.log();
  }
 
  area() {
    return this.height * this.width;
  }
 
  private log() {
    console.log(`new Rectangle was create at ${new Date()}`)
  }
}
 
class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
    //this.width = width;
    //this.color = color;
  }
 
  paint(newColor: string) {
    this.color = newColor;
  }
}
