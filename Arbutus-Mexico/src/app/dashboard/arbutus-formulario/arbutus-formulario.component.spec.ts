import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbutusFormularioComponent } from './arbutus-formulario.component';

describe('ArbutusFormularioComponent', () => {
  let component: ArbutusFormularioComponent;
  let fixture: ComponentFixture<ArbutusFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbutusFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbutusFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
