import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductBasicInformationComponent } from './create-product-basic-information.component';

describe('CreateProductBasicInformationComponent', () => {
  let component: CreateProductBasicInformationComponent;
  let fixture: ComponentFixture<CreateProductBasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreateProductBasicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
