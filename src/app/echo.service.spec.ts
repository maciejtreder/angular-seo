import { TestBed, inject } from '@angular/core/testing';

import { EchoService } from './echo.service';

describe('EchoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EchoService]
    });
  });

  it('should be created', inject([EchoService], (service: EchoService) => {
    expect(service).toBeTruthy();
  }));
});
