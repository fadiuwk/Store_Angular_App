import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSearchPipe } from './pipes/product-search.pipe';
import { TextCutPipe } from './pipes/text-cut.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginatoinComponent } from './components/paginatoin/paginatoin.component';
import { primeModule } from './modules/prime.module';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';


const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgMaterialModule,
  primeModule,
  TranslateModule,
  ToastrModule.forRoot()

  
]
const declarationsList: any = [
  HeaderComponent,
  TextCutPipe,
  ProductSearchPipe,
  SpinnerComponent,
  PaginatoinComponent
];

@NgModule({
  declarations: [
    ...declarationsList,
  ],
  imports: [
    sharedModules
  ],
  exports: [
    sharedModules,
    ...declarationsList

  ],
})
export class SharedModule { }
