interface Shape{
    getArea(): number;
}

class Circle implements Shape{
    constructor(private radius : number) {
    }
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    constructor(public width:number, public height : number) {
    }
    getArea(): number {
        return this.width * this.height;

    }
}
const circle = new Circle(6);
const rectangle = new Rectangle(5,2);
console.log(circle, rectangle);

//public 으로 선언시 class 밖에서도 참조된 것들 확인 가능하지만
//private 으로 선언시 내부에서만 참조 가능