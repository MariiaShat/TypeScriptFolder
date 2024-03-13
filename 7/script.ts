// class Point{
//     public static getCounter():number{
//         let x=5
//         return x;
//     };
//     x:number
//     y:number
    // constructor(){
    //     this.x=0
    //     this.y=0
    //     Point.getCounter
    // }
// }

// let point1: Point = new Point()

// // console.log(Point.cnt)

// let point2: Point = new Point()

// console.log(Point.getCounter)

// console.log(point1.getCounter)



// class ShopItem {
//     public static id:number=0;
//     public nazvanie:string;
//     public size:number;
//     public ves:number;
//     public prise:number;
//     constructor(){
//         this.nazvanie = ''
//         this.prise =0
//         this.size=0
//         this.ves=0
//         ShopItem.id++
//     }
// }

class Rect{
    // protected id: number;
    public static getWidth(squer:Rect):number{
        return Math.abs(squer.x1-squer.x2);
    }
    public static getLength(squer:Rect):number{
        return Math.abs(squer.y1-squer.y2);
    }
        x1:number;
        x2:number;
        y1:number;
        y2:number;
    constructor(){
        this.x1=0
        this.x2=0
        this.y1=0
        this.y2=0
    }
}

// class Pryam extends Rect{
//     public x1:number;
//     public x2:number;
//     public y1:number;
//     public y2:number;
// }
