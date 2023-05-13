import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-paginatoin',
  templateUrl: './paginatoin.component.html',
  styleUrls: ['./paginatoin.component.scss']
})
export class PaginatoinComponent {

  @ViewChild('pp') ngPaginator!: Paginator;

  @Input() size = 10;
  @Input() total = 0;
  @Input() selectOptions = [5,10,20,30,50]

  @Output() pageIndexChange = new EventEmitter();
  
  page = 0;
  displayedOptions:{key:string,value:number}[] = []

  constructor() { }

  ngOnInit(): void {
    this.selectOptions.forEach(o => {
      this.displayedOptions.push({key:o+' rows', value:o})
    })
  }

  selectedOptions(e:any){
    this.size = e.value
    this.page = 0
    this.resetPP()
  }

  onPageChange(e:any){
    this.page = e.page
    const res:SimplePagination = {page:this.page, size:this.size}
    this.pageIndexChange.emit(res)
  }

  resetPP(){
    this.ngPaginator.changePage(0);
  }
}

interface SimplePagination {
  page:number,
  size:number
}

