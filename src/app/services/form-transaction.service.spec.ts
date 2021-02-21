import { TestBed } from '@angular/core/testing';

import { FormTransactionService } from './form-transaction.service';

describe('FormTransactionService', () => {
  let service: FormTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
