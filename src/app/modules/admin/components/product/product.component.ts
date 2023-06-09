import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatConfirmComponent } from 'src/app/modules/ng-material/mat-confirm/mat-confirm.component';
import { Product } from 'src/app/modules/shared/models/product';
import { ProductService } from 'src/app/modules/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
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
export class ProductComponent {

  products!: Product[];
  searchTarget = '';
  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.productService.getPorudctList(5);
    this.productService.getUpdatedProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }

  confirmDialog(index:number ,  id:number) {
    const dialogRef: MatDialogRef<MatConfirmComponent> = this.dialog.open(
      MatConfirmComponent,
      {
        width: '600px',
        height: 'auto',
        data: {
          message: 'Are you sure to delete this product?',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data.clicked === 'Delete') {
        this.deleteProduct(index , id);
      }
    });
  }

  deleteProduct(index:number , id:number){
    this.productService.deleteProduct(index , id)
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }

  onPageChange(event: PageEvent) {
    const selectedPageSize = event.pageSize;
    this.productService.getPorudctList(selectedPageSize);
  }

}
