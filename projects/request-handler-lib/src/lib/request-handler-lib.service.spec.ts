import {TestBed} from '@angular/core/testing';

import {RequestHandlerLibService} from './request-handler-lib.service';

describe('RequestHandlerLibService', () => {
  let service: RequestHandlerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestHandlerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
