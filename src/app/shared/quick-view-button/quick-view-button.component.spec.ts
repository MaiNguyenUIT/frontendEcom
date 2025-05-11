import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewButtonComponent } from './quick-view-button.component';

describe('QuickViewButtonComponent', () => {
  let component: QuickViewButtonComponent;
  let fixture: ComponentFixture<QuickViewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickViewButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickViewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
