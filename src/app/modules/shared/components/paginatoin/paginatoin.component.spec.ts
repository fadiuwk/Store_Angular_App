import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatoinComponent } from './paginatoin.component';

describe('PaginatoinComponent', () => {
  let component: PaginatoinComponent;
  let fixture: ComponentFixture<PaginatoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatoinComponent]
    });
    fixture = TestBed.createComponent(PaginatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
