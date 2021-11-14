import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarosComponent } from './comaros.component';

describe('ComarosComponent', () => {
  let component: ComarosComponent;
  let fixture: ComponentFixture<ComarosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComarosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComarosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
