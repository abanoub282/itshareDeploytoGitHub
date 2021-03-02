import { TestBed } from '@angular/core/testing';

import { ItshareApiService } from './itshare-api.service';

describe('ItshareApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItshareApiService = TestBed.get(ItshareApiService);
    expect(service).toBeTruthy();
  });
});
