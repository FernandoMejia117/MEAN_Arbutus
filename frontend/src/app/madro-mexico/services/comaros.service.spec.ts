import { TestBed } from '@angular/core/testing';

import { ComarosService } from './comaros.service';

describe('ComarosService', () => {
  let service: ComarosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComarosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
