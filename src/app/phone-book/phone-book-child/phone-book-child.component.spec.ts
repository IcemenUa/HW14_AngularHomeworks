import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookChildComponent } from './phone-book-child.component';

describe('PhoneBookChildComponent', () => {
  let component: PhoneBookChildComponent;
  let fixture: ComponentFixture<PhoneBookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
