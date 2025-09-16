import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C001 } from './c001';

describe('C001', () => {
  let component: C001;
  let fixture: ComponentFixture<C001>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C001]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C001);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
