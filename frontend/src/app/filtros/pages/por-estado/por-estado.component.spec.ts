import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorEstadoComponent } from './por-estado.component';

describe('PorEstadoComponent', () => {
  let component: PorEstadoComponent;
  let fixture: ComponentFixture<PorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
