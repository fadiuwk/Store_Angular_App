import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  public products$ = new Subject<Product[]>();
  private updatedProducts: Product[] = [];
  private readonly baseUrl = environment.BACKEND_BASE_URL + 'products/';
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }


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
        this.toastr.error('faild to get products')

      },
    });
  }

  addProduct(
    formValue: Product
  ) {

    const endPoint = this.baseUrl;
    this.http.post<Product>(endPoint, formValue).subscribe({
      next: (data) => {
        this.updatedProducts.unshift(data);
        this.products$.next(this.updatedProducts);
        this.toastr.success('success')

      },
      error: () => {
        this.products$.error('faild to add new product');
        this.toastr.error('faild to add new product')

      },
    });
  }

  updateProduct(
    formValue: Product,
    id: number,
    index: number
  ) {
    const endPoint = this.baseUrl + id;
    this.http.put<Product>(endPoint, formValue).subscribe({
      next: (data) => {
        this.updatedProducts.splice(index, 1, data);
        this.products$.next(this.updatedProducts);
        this.toastr.success('success')

      },
      error: () => {
        this.products$.error('faild to update product');
        this.toastr.error('faild to update product')

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

  deleteProduct(index: number, id: number) {

    const endPoint = this.baseUrl + id;
    this.http.delete<{ id: number }>(endPoint).subscribe({
      next: (data: { id: any; }) => {
        this.updatedProducts.splice(index, 1);
        this.products$.next(this.updatedProducts);
        this.toastr.success('deleted')

      },
      error: () => {
        this.products$.error('faild to delete product');
        this.toastr.error('faild to delete product')

      },
    });
  }
}

