import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComarosComponent } from './tabla-comaros.component';

describe('TablaComarosComponent', () => {
  let component: TablaComarosComponent;
  let fixture: ComponentFixture<TablaComarosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaComarosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
