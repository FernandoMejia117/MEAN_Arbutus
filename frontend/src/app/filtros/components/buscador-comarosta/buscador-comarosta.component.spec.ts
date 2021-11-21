import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorComarostaComponent } from './buscador-comarosta.component';

describe('BuscadorComarostaComponent', () => {
  let component: BuscadorComarostaComponent;
  let fixture: ComponentFixture<BuscadorComarostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorComarostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorComarostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
