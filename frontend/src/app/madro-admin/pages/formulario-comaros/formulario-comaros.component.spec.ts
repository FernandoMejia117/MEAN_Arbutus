import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComarosComponent } from './formulario-comaros.component';

describe('FormularioComarosComponent', () => {
  let component: FormularioComarosComponent;
  let fixture: ComponentFixture<FormularioComarosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComarosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
