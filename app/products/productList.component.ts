import { Component, OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductFilterPipe} from './productFilter.pipe'
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    // selector: 'apm-products',
    templateUrl: 'app/products/productList.component.html',
    styleUrls: ['app/products/productList.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class ProductListComponent implements OnInit{

    listTitle:string='Product List';
    imageWidth:number=40;
    imageMargin:number=2;
    isShowImage:boolean=false;
    listFilter:string;
    products: IProduct[];
    errorMessage:string;

    constructor(private _productService: ProductService){

    }

    toogleImage(): void {
        this.isShowImage = !this.isShowImage;
    }

    ngOnInit(): void {        
        this._productService.getProducts()
             .subscribe(
                 products=> this.products = products,
                 error=>this.errorMessage = <any>error);
             
    }

    onRatingClicked(message:string): void {
        this.listTitle = 'Product List: ' + message;
    }
}