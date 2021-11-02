import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogo3Component } from './catalogo3.component';

describe('Catalogo3Component', () => {
  let component: Catalogo3Component;
  let fixture: ComponentFixture<Catalogo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Catalogo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
