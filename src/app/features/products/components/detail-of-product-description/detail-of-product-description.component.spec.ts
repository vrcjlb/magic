import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfProductDescriptionComponent } from './detail-of-product-description.component';

describe('DetailOfProductDescriptionComponent', () => {
  let component: DetailOfProductDescriptionComponent;
  let fixture: ComponentFixture<DetailOfProductDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetailOfProductDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOfProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
