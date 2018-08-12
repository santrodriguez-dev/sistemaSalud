import { SolicitudesModule } from './solicitudes.module';

describe('SolicitudesModule', () => {
  let solicitudesModule: SolicitudesModule;

  beforeEach(() => {
    solicitudesModule = new SolicitudesModule();
  });

  it('should create an instance', () => {
    expect(solicitudesModule).toBeTruthy();
  });
});
