/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindFlightService } from './find-flight.service';

describe('Service: FindFlight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindFlightService]
    });
  });

  it('should ...', inject([FindFlightService], (service: FindFlightService) => {
    expect(service).toBeTruthy();
  }));
});
