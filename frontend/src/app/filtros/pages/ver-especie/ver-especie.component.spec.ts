import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEspecieComponent } from './ver-especie.component';

describe('VerEspecieComponent', () => {
  let component: VerEspecieComponent;
  let fixture: ComponentFixture<VerEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEspecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
