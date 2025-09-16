import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C002 } from './c002';

describe('C002', () => {
  let component: C002;
  let fixture: ComponentFixture<C002>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C002]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C002);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
