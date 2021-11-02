import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtro2Component } from './filtro2.component';

describe('Filtro2Component', () => {
  let component: Filtro2Component;
  let fixture: ComponentFixture<Filtro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filtro2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
