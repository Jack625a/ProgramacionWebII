import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datos2Component } from './datos2.component';

describe('Datos2Component', () => {
  let component: Datos2Component;
  let fixture: ComponentFixture<Datos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datos2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
