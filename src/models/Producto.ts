export class Producto{
    id : number;
     name : string;
     price :string;
     quantity : number;
     description : string;

    constructor(id: number, name : string, price : string, quantity : number, description :string){
        this.id= id;
        this.name= name;
        this.price= price;
        this.quantity= quantity;
        this.description= description;
    }
}

export default Producto