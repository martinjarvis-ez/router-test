/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WidgetService } from './widget.service';

describe('Service: WidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetService]
    });
  });

  it('should ...', inject([WidgetService], (service: WidgetService) => {
    expect(service).toBeTruthy();
  }));
});
