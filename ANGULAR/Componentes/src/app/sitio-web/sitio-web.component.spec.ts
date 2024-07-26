import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioWebComponent } from './sitio-web.component';

describe('SitioWebComponent', () => {
  let component: SitioWebComponent;
  let fixture: ComponentFixture<SitioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitioWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
