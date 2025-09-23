import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProduct } from './show-product';

describe('ShowProduct', () => {
  let component: ShowProduct;
  let fixture: ComponentFixture<ShowProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
