import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { ProductService } from 'src/app/modules/shared/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  imagePath!: string | null;
  productForm!: FormGroup;
  productId !: number;
  productIndex !: number;
  categories: string[] = []

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private _ActivatedRoute: ActivatedRoute,
    private _CategoryService: CategoryService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      category: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control('', [Validators.required]),
      image: this.formBuilder.control('', [Validators.required]),
    });

    this.getParams();
    this.getAllCategories()
  }
  onImagePicked(event: Event) {
    this.imagePath = null;
    const input = event.target as HTMLInputElement;
    const file = input.files![0] as File;
    this.productForm.patchValue({
      image: file,
    });
    this.productForm.get('image')?.updateValueAndValidity();
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.imagePath = fileReader.result as string;
    };
    if (file) {
      fileReader.readAsDataURL(file as File);
    }
  }

  submitForm() {

    this.productId ? this.updateProduct() : this.addProduct()
  }

  addProduct() {
    if (this.productForm.invalid) return;

    this.productService.addProduct(this.productForm.value);
    this.route.navigate(['admin'])
  }

  updateProduct() {
    if (this.productForm.invalid) return;

    this.productService.updateProduct(this.productForm.value , this.productId, this.productIndex);
    this.route.navigate(['admin'])

  }

  getParams() {
    let params = this._ActivatedRoute.snapshot.params;
    this.productId = params['id'];
    if (this.productId) {
      this.getProductById(this.productId);
    }
  }

  queryParams() {
    this._ActivatedRoute.queryParams.subscribe(params => {
      this.productIndex = +params['index'];
    });
  }

  getProductById(id: number) {
    this.productService.getProudctDetails(this.productId).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
        this.imagePath = product.image ? product.image : ''
      },
    });
  }

  getAllCategories() {
    this._CategoryService.getCategoryList().subscribe(
      res => {
        this.categories = res
      }
    )
  }

  selectCategory(event: any) {
    console.log(event?.target?.value);

  }

}
