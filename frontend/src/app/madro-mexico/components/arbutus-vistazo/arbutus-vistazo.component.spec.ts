import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbutusVistazoComponent } from './arbutus-vistazo.component';

describe('ArbutusVistazoComponent', () => {
  let component: ArbutusVistazoComponent;
  let fixture: ComponentFixture<ArbutusVistazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbutusVistazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbutusVistazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
