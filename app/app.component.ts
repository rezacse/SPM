
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ProductListComponent } from './products/productList.component'
import { WelcomeComponent } from './home/welcome.component';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/productDetail.component';

@Component({
    selector: 'apm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{ pageTitle }}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Product List</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
    `,    
    // `
    // <div>
    //     <h1>{{pageTitle}}</h1>
    //     <apm-products></apm-products>
    // </div>`,
    // directives:[ProductListComponent],
    styleUrls:['app/app.component.css'],
    directives:[ROUTER_DIRECTIVES],
    providers: [ProductService, 
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/products', name:'Products', component: ProductListComponent },
    { path: '/product/:id', name:'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent{
    pageTitle: string = 'Auto Parts Management';
}