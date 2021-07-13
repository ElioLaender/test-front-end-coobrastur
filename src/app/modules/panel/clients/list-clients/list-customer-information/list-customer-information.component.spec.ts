import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerInformationComponent } from './list-customer-information.component';

describe('ListCustomerInformationComponent', () => {
  let component: ListCustomerInformationComponent;
  let fixture: ComponentFixture<ListCustomerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
