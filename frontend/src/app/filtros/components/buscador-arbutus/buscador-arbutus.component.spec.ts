import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorArbutusComponent } from './buscador-arbutus.component';

describe('BuscadorArbutusComponent', () => {
  let component: BuscadorArbutusComponent;
  let fixture: ComponentFixture<BuscadorArbutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorArbutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorArbutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
