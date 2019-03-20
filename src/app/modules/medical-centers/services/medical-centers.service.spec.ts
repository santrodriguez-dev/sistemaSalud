import { TestBed } from '@angular/core/testing';

import { MedicalCentersService } from './medical-centers.service';

describe('MedicalCentersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalCentersService = TestBed.get(MedicalCentersService);
    expect(service).toBeTruthy();
  });
});
