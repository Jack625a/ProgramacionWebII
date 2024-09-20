import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaInferiorComponent } from './alerta-inferior.component';

describe('AlertaInferiorComponent', () => {
  let component: AlertaInferiorComponent;
  let fixture: ComponentFixture<AlertaInferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertaInferiorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
