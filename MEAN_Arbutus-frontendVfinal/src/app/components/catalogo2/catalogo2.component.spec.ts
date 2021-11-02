import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogo2Component } from './catalogo2.component';

describe('Catalogo2Component', () => {
  let component: Catalogo2Component;
  let fixture: ComponentFixture<Catalogo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Catalogo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
