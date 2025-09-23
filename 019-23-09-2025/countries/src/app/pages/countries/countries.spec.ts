import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Countries } from './countries';

describe('Countries', () => {
  let component: Countries;
  let fixture: ComponentFixture<Countries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Countries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Countries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
