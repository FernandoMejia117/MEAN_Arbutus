import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaArbuComponent } from './vista-arbu.component';

describe('VistaArbuComponent', () => {
  let component: VistaArbuComponent;
  let fixture: ComponentFixture<VistaArbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaArbuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaArbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
