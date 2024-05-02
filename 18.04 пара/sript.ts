abstract class Publisher{ 
        title: string 
        author: string
        pubYear: number
        copies: number 
        get getTitle(): string{ 
            return this.title 
    } 
         set setTitle(value:string){ 
             this.title = value  
    } 
    static count: number = 0 
         constructor(){ 
         Publisher.count ++ 
    } 
    } 
    class Book extends Publisher implements Reception{ 
        pages: number 
        delivery(item: Publisher): void{ 
     
        } 
        receive(item: Publisher): void{ 
     
        } 
    } 
    class Magazine extends Publisher implements Reception{ 
        issue: number 
        delivery(item: Publisher): void{ 
     
        } 
        receive(item: Publisher): void{ 
             
        } 
    } 
    
    interface Reception{ 
        delivery(item: Publisher): void; 
        receive(item: Publisher): void; 
    } 
    
    class Reader implements Reception{
        firstName: string
        lastName: string
        //
        items: Publisher[]
        static items: Publisher[]
        
        getItems(): Publisher[] {
            return this.items;
          }
        setItems(items: Publisher[]): void {
            this.items = items;
        }

        delivery(item:Publisher):void{
            if(item.copies==0) return
            if(item.copies == Reader.items.length) return
            item.copies =  item.copies -1
        }
        receive(item:Publisher):void{
            item.copies=item.copies+1
        }
    
    }
    class Library{
        items: Publisher[]

        delivery(item:Publisher):void{
            this.items.push(item)

        }
        receive(item:Publisher){
            this.items.pop()
        }
        
    }

