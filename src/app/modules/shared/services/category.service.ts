import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})


export class CategoryService {
    private updatedProducts: Product[] = [];
    private readonly baseUrl = environment.BACKEND_BASE_URL + 'products/';
    constructor(
        private http: HttpClient,
        private _ProductService:ProductService
        ) { }


    getCategoryList() {
        const endPoint = `${this.baseUrl}/categories`;

        return this.http.get<any>(endPoint);
    }

    getProudctBySpecificCategory(category: string) {
        const endPoint = `${this.baseUrl}category/${category}`;

        this.http.get<Product[]>(endPoint).subscribe({
            next: (products: Product[]) => {                
                this.updatedProducts = products;
                this._ProductService.products$.next(this.updatedProducts);
            },
            error: () => {
                this.updatedProducts = [];
                this._ProductService.products$.error('faild to get products');
            },
        });
    }
}

