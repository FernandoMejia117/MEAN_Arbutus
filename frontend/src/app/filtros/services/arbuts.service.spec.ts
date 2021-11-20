import { TestBed } from '@angular/core/testing';

import { ArbutsService } from './arbuts.service';

describe('ArbutsService', () => {
  let service: ArbutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
