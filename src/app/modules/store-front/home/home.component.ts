import { Component } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';
import { PageEvent } from '@angular/material/paginator';
import { query, stagger, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('productAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(-50px)' }))
      ])
    ])
  ]
})
export class HomeComponent {

  categories: string[] = [];
  products!: Product[];
  searchTarget = '';



  constructor(
    private _CategoryService: CategoryService,
    private _ProductService: ProductService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCategories();

    this._ProductService.getPorudctList(8);
    this._ProductService.getUpdatedProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });

  }


  trackById(index: number, product: Product): number {
    return product.id;
  }

  getAllCategories() {
    this._CategoryService.getCategoryList().subscribe(
      res => {
        this.categories = res
      }
    )
  }


  selectCategory(event: any) {

    const selectedCategory = event?.target?.value;

    (selectedCategory == 'all') ? this._ProductService.getPorudctList(8) : this.getProudctBySpecificCategory(selectedCategory)


  }

  getProudctBySpecificCategory(selectedCategory: string) {
    this._CategoryService.getProudctBySpecificCategory(selectedCategory)
  }

  onPageChange(event: PageEvent) {
    const selectedPageSize = event.pageSize;
    this._ProductService.getPorudctList(selectedPageSize);
  }
}
