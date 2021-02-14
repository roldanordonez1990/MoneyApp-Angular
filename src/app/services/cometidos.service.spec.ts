import { TestBed } from '@angular/core/testing';

import { CometidosService } from './cometidos.service';

describe('CometidosService', () => {
  let service: CometidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CometidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
