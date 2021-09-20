import { TestBed } from '@angular/core/testing';

import { FaceMeService } from './face-me.service';

describe('FaceMeService', () => {
  let service: FaceMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
