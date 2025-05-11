import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBadgeComponent } from './product-badge.component';

describe('ProductBadgeComponent', () => {
  let component: ProductBadgeComponent;
  let fixture: ComponentFixture<ProductBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
