/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ControlToComponentMapperService } from './control-to-component-mapper.service';

describe('Service: ControlToComponentMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlToComponentMapperService]
    });
  });

  it('should ...', inject([ControlToComponentMapperService], (service: ControlToComponentMapperService) => {
    expect(service).toBeTruthy();
  }));
});
