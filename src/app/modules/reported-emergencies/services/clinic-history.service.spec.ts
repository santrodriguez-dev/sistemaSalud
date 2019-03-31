import { TestBed } from '@angular/core/testing';

import { ClinicHistoryService } from './clinic-history.service';

describe('ClinicHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicHistoryService = TestBed.get(ClinicHistoryService);
    expect(service).toBeTruthy();
  });
});
