import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomarosComponent } from './listacomaros.component';

describe('ListacomarosComponent', () => {
  let component: ListacomarosComponent;
  let fixture: ComponentFixture<ListacomarosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacomarosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
