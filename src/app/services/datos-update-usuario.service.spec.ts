import { TestBed } from '@angular/core/testing';

import { DatosUpdateUsuarioService } from './datos-update-usuario.service';

describe('DatosUpdateUsuarioService', () => {
  let service: DatosUpdateUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosUpdateUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
