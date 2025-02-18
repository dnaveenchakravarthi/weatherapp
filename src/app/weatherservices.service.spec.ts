import { TestBed } from '@angular/core/testing';

import { WeatherservicesService } from './weatherservices.service';

describe('WeatherservicesService', () => {
  let service: WeatherservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
