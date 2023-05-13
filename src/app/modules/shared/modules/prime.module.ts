import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem, MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PaginatorModule } from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {ListboxModule} from 'primeng/listbox';


const primeList: any = [
  PasswordModule,
  ToastModule,
  PaginatorModule,
  InputTextModule,
  AccordionModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  TableModule,
  TabMenuModule,
  ListboxModule
];
@NgModule({
  imports: [...primeList],
  exports: [...primeList],
})
export class primeModule {}
