import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductMetaDataComponent } from './create-product-meta-data.component';

describe('CreateProductMetaDataComponent', () => {
  let component: CreateProductMetaDataComponent;
  let fixture: ComponentFixture<CreateProductMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreateProductMetaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
