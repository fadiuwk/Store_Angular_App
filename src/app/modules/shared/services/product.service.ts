import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private products$ = new Subject<Product[]>();
  private updatedProducts: Product[] = [];
  private readonly baseUrl = environment.BACKEND_BASE_URL + 'products/';
  constructor(private http: HttpClient) { }


  getPorudctList(limit: number) {
    const endPoint = `${this.baseUrl}?limit=${limit}`;
    this.http.get<Product[]>(endPoint).subscribe({
      next: (products: Product[]) => {
        this.updatedProducts = products;
        this.products$.next(this.updatedProducts);
      },
      error: () => {
        this.updatedProducts = [];
        this.products$.error('faild to get products');
      },
    });
  }

  addProduct(
    title: string,
    description: string,
    category: string,
    price: number,
    image: File
  ) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price as unknown as string);
    formData.append('image', image);
    const endPoint = this.baseUrl;
    this.http.post<{ id: number }>(endPoint, formData).subscribe({
      next: (data: { id: any; }) => {
        this.updatedProducts.unshift({ id: data.id, title, price, category });
        this.products$.next(this.updatedProducts);
      },
      error: () => {
        this.products$.error('faild to add new product');
      },
    });
  }

  updateProduct(
    title: string,
    description: string,
    category: string,
    price: number,
    image: string,
    id:number,
    index:number
  ) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price as unknown as string);
    formData.append('image', image);
    const endPoint = this.baseUrl + id;
    this.http.put<{ id: number }>(endPoint, formData).subscribe({
      next: (data: { id: any; }) => {
        this.updatedProducts.splice(index , 1 , { id: data.id, title, price, category , image});
        this.products$.next(this.updatedProducts);
      },
      error: () => {
        this.products$.error('faild to add new product');
      },
    });
  }

  getProudctDetails(id: number) {
    const endPoint = this.baseUrl + id;
    return this.http.get<Product>(endPoint);
  }

  getUpdatedProducts() {
    return this.products$.asObservable();
  }

  deleteProduct(index:number , id:number) {

    const endPoint = this.baseUrl + id;
    this.http.delete<{ id: number }>(endPoint).subscribe({
      next: (data: { id: any; }) => {
        this.updatedProducts.splice(index , 1);
        this.products$.next(this.updatedProducts);
      },
      error: () => {
        this.products$.error('faild to add new product');
      },
    });
  }
}

