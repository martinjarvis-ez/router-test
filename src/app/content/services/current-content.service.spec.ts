/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentContentService } from './current-content.service';

describe('Service: CurrentContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentContentService]
    });
  });

  it('should ...', inject([CurrentContentService], (service: CurrentContentService) => {
    expect(service).toBeTruthy();
  }));
});
