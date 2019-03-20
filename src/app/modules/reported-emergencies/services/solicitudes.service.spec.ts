import { TestBed, inject } from '@angular/core/testing';

import { SolicitudesService } from './solicitudes.service';

describe('SolicitudesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudesService]
    });
  });

  it('should be created', inject([SolicitudesService], (service: SolicitudesService) => {
    expect(service).toBeTruthy();
  }));
});
