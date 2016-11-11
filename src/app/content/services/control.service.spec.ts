/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ControlService } from './control.service';

describe('Service: ControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlService]
    });
  });

  it('should ...', inject([ControlService], (service: ControlService) => {
    expect(service).toBeTruthy();
  }));
});
