import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuscadorComponent } from './admin-buscador.component';

describe('AdminBuscadorComponent', () => {
  let component: AdminBuscadorComponent;
  let fixture: ComponentFixture<AdminBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
