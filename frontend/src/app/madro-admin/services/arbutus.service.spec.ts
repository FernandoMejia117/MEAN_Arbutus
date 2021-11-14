import { TestBed } from '@angular/core/testing';

import { ArbutusService } from './arbutus.service';

describe('ArbutusService', () => {
  let service: ArbutusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbutusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
