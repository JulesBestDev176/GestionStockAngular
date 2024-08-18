import { TestBed } from '@angular/core/testing';

import { ClientSService } from './client-s.service';

describe('ClientSService', () => {
  let service: ClientSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
