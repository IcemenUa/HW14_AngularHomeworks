import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookParentComponent } from './phone-book-parent.component';

describe('PhoneBookParentComponent', () => {
  let component: PhoneBookParentComponent;
  let fixture: ComponentFixture<PhoneBookParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
