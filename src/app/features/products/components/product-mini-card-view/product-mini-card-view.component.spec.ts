import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMiniCardViewComponent } from './product-mini-card-view.component';

describe('ProductMiniCardViewComponent', () => {
  let component: ProductMiniCardViewComponent;
  let fixture: ComponentFixture<ProductMiniCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMiniCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMiniCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
