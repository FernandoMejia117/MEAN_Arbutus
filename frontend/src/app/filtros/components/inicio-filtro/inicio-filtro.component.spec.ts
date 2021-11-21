import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFiltroComponent } from './inicio-filtro.component';

describe('InicioFiltroComponent', () => {
  let component: InicioFiltroComponent;
  let fixture: ComponentFixture<InicioFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
