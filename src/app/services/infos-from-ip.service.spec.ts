import { TestBed, inject } from '@angular/core/testing';

import { CityFromIpService } from './city-from-ip.service';

describe('CityFromIpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityFromIpService]
    });
  });

  it('should ...', inject([CityFromIpService], (service: CityFromIpService) => {
    expect(service).toBeTruthy();
  }));
});
