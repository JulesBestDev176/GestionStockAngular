import { TestBed } from '@angular/core/testing';

import { CommandeCltFrsService } from './commande-clt-frs.service';

describe('CommandeCltFrsService', () => {
  let service: CommandeCltFrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeCltFrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
