import { TestBed } from '@angular/core/testing';

import { ComarostaphylisService } from './comarostaphylis.service';

describe('ComarostaphylisService', () => {
  let service: ComarostaphylisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComarostaphylisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
