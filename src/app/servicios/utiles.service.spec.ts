import { TestBed } from '@angular/core/testing';

import { UtilesService } from './utiles.service';

describe('UtilesService', () => {
  let service: UtilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
