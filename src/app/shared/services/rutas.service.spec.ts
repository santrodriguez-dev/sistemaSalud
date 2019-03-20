import { TestBed, inject } from '@angular/core/testing';

import { RutasService } from './rutas.service';

describe('RutasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutasService]
    });
  });

  it('should be created', inject([RutasService], (service: RutasService) => {
    expect(service).toBeTruthy();
  }));
});
