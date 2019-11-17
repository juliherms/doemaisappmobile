import { TestBed } from '@angular/core/testing';

import { DoacoesService } from './doacoes.service';

describe('DoacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoacoesService = TestBed.get(DoacoesService);
    expect(service).toBeTruthy();
  });
});
