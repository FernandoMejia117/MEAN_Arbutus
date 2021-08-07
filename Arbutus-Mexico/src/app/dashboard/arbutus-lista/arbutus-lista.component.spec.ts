import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbutusListaComponent } from './arbutus-lista.component';

describe('ArbutusListaComponent', () => {
  let component: ArbutusListaComponent;
  let fixture: ComponentFixture<ArbutusListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbutusListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbutusListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
