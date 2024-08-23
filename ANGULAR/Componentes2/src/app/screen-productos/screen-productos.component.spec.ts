import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProductosComponent } from './screen-productos.component';

describe('ScreenProductosComponent', () => {
  let component: ScreenProductosComponent;
  let fixture: ComponentFixture<ScreenProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
