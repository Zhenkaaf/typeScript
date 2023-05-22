export class Circle {
    protected static pi: number = 3.14;
    private static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
    constructor(public radius: number) { }
    get area() {
        return Circle.pi * this.radius * this.radius
    }
}

const c1 = new Circle(20);
c1.radius
c1.area
//Circle.pi//protected
//Circle.calculateArea(25);//private
class Ellipse extends Circle {
    constructor(public radius: number) {
        super(radius);
        Circle.pi
    }
}



//Опишите типы для класса Temperature:



export class Temperature {
    /* celsius: number */
  constructor(public celsius: number) {
    this.celsius = celsius;
  }
 
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
 
  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }
 
  static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}




/* Оба варианта, представленные вами, являются правильными способами объявления свойств класса Temperature в TypeScript. Разница между ними заключается в том, как объявлено свойство celsius и его видимость.

В первом варианте:

typescript
Copy code
constructor(public celsius: number) {
  this.celsius = celsius;
}
Свойство celsius объявлено с модификатором public в параметрах конструктора. Это означает, что TypeScript автоматически создаст публичное свойство celsius и присвоит ему переданное значение celsius при создании экземпляра класса. Таким образом, внутри класса Temperature можно обращаться к свойству this.celsius без явного объявления и инициализации.

Во втором варианте:

typescript
Copy code
celsius: number;
constructor(celsius: number) {
  this.celsius = celsius;
}
Свойство celsius объявлено внутри класса, но не в параметрах конструктора. В этом случае, вам нужно явно объявить свойство celsius и проинициализировать его значением celsius внутри конструктора.

Оба варианта корректно определяют свойство celsius и позволяют использовать его внутри класса Temperature. Однако использование модификатора public в параметрах конструктора позволяет одновременно объявить и инициализировать свойство класса, что делает код более кратким и понятным. */