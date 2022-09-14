import { TestBed } from '@angular/core/testing';

import { RequestManagerService } from './request-manager.service';

describe('RequestManagerService', () => {
  let service: RequestManagerService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
