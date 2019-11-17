import { TestBed } from '@angular/core/testing';

import { OngsService } from './ongs.service';

describe('OngsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OngsService = TestBed.get(OngsService);
    expect(service).toBeTruthy();
  });
});
