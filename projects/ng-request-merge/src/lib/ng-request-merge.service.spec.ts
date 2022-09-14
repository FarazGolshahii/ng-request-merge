import {TestBed} from '@angular/core/testing';

import {NgRequestMerge} from './ng-request-merge.service';

describe('NgRequestMerge', () => {
  let service: NgRequestMerge;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRequestMerge);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
