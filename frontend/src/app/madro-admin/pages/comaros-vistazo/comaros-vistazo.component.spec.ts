import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarosVistazoComponent } from './comaros-vistazo.component';

describe('ComarosVistazoComponent', () => {
  let component: ComarosVistazoComponent;
  let fixture: ComponentFixture<ComarosVistazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComarosVistazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComarosVistazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
