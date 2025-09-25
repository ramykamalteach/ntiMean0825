import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCountry } from './show-country';

describe('ShowCountry', () => {
  let component: ShowCountry;
  let fixture: ComponentFixture<ShowCountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCountry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCountry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
