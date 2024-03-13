class Shape{
    protected id: number;
    public width: number
    public color: string;

    draw():void{
        console.log("Рисование фигуры");
    }

    constructor(){
        console.log("Конструктор Shape");
    }
}

class Line extends Shape{
    public x1: number
    public x2: number
    public y1: string;
    public y2: string;
    draw():void{
        console.log("Рисование линии");
    }
    constructor(){
        super();

        console.log("Конструктор Line", this.id);
    }
}


class Triangle extends Shape{
    public x1: number
    public x2: number
    public y1: string;
    public y2: string;
    constructor(){
        super();

        console.log("Конструктор Triangle", this.id);
    }
}

const perem:Line=new Line();
const perem1:Triangle=new Triangle();
const perem2:Shape=new Shape();
perem.draw()
perem1.draw()
perem2.draw()