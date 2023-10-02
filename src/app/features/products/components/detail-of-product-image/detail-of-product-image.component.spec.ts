import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfProductImageComponent } from './detail-of-product-image.component';

describe('DetailOfProductImageComponent', () => {
  let component: DetailOfProductImageComponent;
  let fixture: ComponentFixture<DetailOfProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetailOfProductImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOfProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
