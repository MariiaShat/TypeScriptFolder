class Furniture {
    gabarit: string; 
    name: string;
    price: number
    constructor(_gabarit: string, _name: string, _price: number){
        this.gabarit=_gabarit
        this.name=_name
        this.price=_price
        console.log("Конструктор furniture")
    }
}

class Chair extends Furniture{
    chairlegs: number; chairback: number;
    chairlegsheight:number;

    constructor(_chairlegs:number, _chairback:number, _chairlegsheight:number, _gabarit: string, _name: string, _price: number){
        super(_gabarit,_name, _price)
        this.chairlegs=_chairlegs
        this.chairback=_chairback
        this.chairlegsheight=_chairlegsheight
        console.log("Конструктор Chair")
    }
}

class Table extends Furniture{
    tablelegs: number; tableS: number;

    constructor(_chairlegs:number, _tableS: number,_gabarit: string, _name: string, _price: number){
        super(_gabarit,_name, _price)
        this.tablelegs=_chairlegs
        this.tableS=_tableS
        console.log("Конструктор Table")
    }
}

class Closet extends Furniture{
    handlematerial: string; numberofsashes: number;
    numberoflockers: number;

    constructor(_handlematerial: string, _numberofsashes: number, _numberoflockers: number,_gabarit: string, _name: string, _price: number){
        super(_gabarit,_name, _price)
        this.handlematerial=_handlematerial
        this.numberofsashes=_numberofsashes
        this.numberoflockers=_numberoflockers

        console.log("Конструктор Closet")
    }
}

class Shelf extends Furniture{
    numberofsegments: number; sizesegments: number;

    constructor(_numberofsegments: number, _sizesegments: number,_gabarit: string, _name: string, _price: number){
        super(_gabarit,_name, _price)
        this.numberofsegments=_numberofsegments
        this.sizesegments=_sizesegments
        console.log("Конструктор Shelf")
    }
}

const furnitures: Furniture[] =[]; 

furnitures[0] = new Chair(10,10,10); // апкастинг
furnitures[1] = new Table(10,10);
furnitures[2] = new Closet('tree',10,10);
furnitures[3] = new Shelf(1,4);

furnitures[0].gabarit= '30x40'
furnitures[0].name = 'супер стулс'
furnitures[0].price = 299.99

furnitures[1].gabarit= '60x80'
furnitures[1].name = 'супер табле'
furnitures[1].price = 400.01

furnitures[2].gabarit= '300x120'
furnitures[2].name = 'Шкаф клосет'
furnitures[2].price = 999.99

furnitures[3].gabarit= '30x80'
furnitures[3].name = 'Полка прикол'
furnitures[3].price = 399.99
