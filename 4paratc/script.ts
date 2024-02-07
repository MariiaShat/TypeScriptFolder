class Rect {
    private x1: number;
    public x2: number;
    y1: number;
    private readonly MAX_COORD =1000;
    y2: number; 
    constructor(x1?: number,x2?: number,y1?: number,y2?: number){
        this.x1
        this.x2
        this.y1
        this.y2
    }
    square(){
        return Math.abs( this.x1 - this.x2)*Math.abs(this.y1-this.y2)
    }
}

let rect1: Rect = new Rect(10,9);

let rect2: Rect = new Rect(1,6,0,7);

// rect1.x1=4;
rect1.x2=8;
// rect1.y1=188393;

console.log(rect1.square())
