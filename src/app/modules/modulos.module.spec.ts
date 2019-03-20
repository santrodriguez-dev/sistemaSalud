import { ModulosModule } from './modulos.module';

describe('ModulosModule', () => {
  let modulosModule: ModulosModule;

  beforeEach(() => {
    modulosModule = new ModulosModule();
  });

  it('should create an instance', () => {
    expect(modulosModule).toBeTruthy();
  });
});
