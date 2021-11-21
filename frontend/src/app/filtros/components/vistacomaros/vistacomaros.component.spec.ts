import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacomarosComponent } from './vistacomaros.component';

describe('VistacomarosComponent', () => {
  let component: VistacomarosComponent;
  let fixture: ComponentFixture<VistacomarosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistacomarosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacomarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
