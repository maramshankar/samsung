import { OnInit, Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/entities/product.entity';

@Component({
    
    templateUrl:`index.component.html`

})

export class ProductComponent implements OnInit{
     
    private products:Product[]

    constructor(private productService:ProductService){

    }

    ngOnInit(){
        this.products=this.productService.findAll();

    }
}