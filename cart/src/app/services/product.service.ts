import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService{
    private products:Product[];

    constructor(){
        this.products=[
        {id:'p1', name:'', price:500, phote:''},
        {id:'p2', name:'', price:1500, phote:''},
        {id:'p3', name:'', price:5500, phote:''},
        {id:'p4', name:'', price:5000, phote:''}

        ];
    }

    findAll():Product[]{
        return this.products
    }
    
    find(id:string):Product{
        return this.products[this.getSelectedIndex(id)]
    }

    private getSelectedIndex(id:string){
        for(var i=0; i<this.products.length; i++){
            if(this.products[i].id==id){
                return i;
            }
        }
        return -1
    }

}