import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBlog } from './one-blog';

describe('OneBlog', () => {
  let component: OneBlog;
  let fixture: ComponentFixture<OneBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
