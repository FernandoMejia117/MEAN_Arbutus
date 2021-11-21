import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaArbutusComponent } from './tabla-arbutus.component';

describe('TablaArbutusComponent', () => {
  let component: TablaArbutusComponent;
  let fixture: ComponentFixture<TablaArbutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaArbutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaArbutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
