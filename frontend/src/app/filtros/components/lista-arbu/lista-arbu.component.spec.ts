import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArbuComponent } from './lista-arbu.component';

describe('ListaArbuComponent', () => {
  let component: ListaArbuComponent;
  let fixture: ComponentFixture<ListaArbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArbuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
