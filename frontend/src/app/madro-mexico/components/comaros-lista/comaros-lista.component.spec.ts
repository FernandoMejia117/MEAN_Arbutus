import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarosListaComponent } from './comaros-lista.component';

describe('ComarosListaComponent', () => {
  let component: ComarosListaComponent;
  let fixture: ComponentFixture<ComarosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComarosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComarosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
