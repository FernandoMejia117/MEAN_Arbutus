import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaArbuComponent } from './tabla-arbu.component';

describe('TablaArbuComponent', () => {
  let component: TablaArbuComponent;
  let fixture: ComponentFixture<TablaArbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaArbuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaArbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
