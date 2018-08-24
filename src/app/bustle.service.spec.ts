import { TestBed, inject } from '@angular/core/testing';

import { BustleService } from './bustle.service';

describe('BustleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BustleService]
    });
  });

  it('should be created', inject([BustleService], (service: BustleService) => {
    expect(service).toBeTruthy();
  }));
});
