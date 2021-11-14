import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbutusVistaComponent } from './arbutus-vista.component';

describe('ArbutusVistaComponent', () => {
  let component: ArbutusVistaComponent;
  let fixture: ComponentFixture<ArbutusVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbutusVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbutusVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
