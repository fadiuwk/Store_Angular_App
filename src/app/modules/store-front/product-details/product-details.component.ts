import { Component } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html', 
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productId !: number;

  product !: Product;

  constructor(
    private productService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getParams();
    
  }

  getParams() {
    let params = this._ActivatedRoute.snapshot.params;
    this.productId = params['id'];
    if (this.productId) {
      this.getProductById(this.productId);
    }
  }

  getProductById(id: number) {
    this.productService.getProudctDetails(this.productId).subscribe({
      next: (product) => {
        this.product = product
      },
    });
  }

}
