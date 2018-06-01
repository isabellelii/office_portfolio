import { TestBed, inject } from '@angular/core/testing';

import { DisplayBuildingsService } from './display-buildings.service';

describe('DisplayBuildingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayBuildingsService]
    });
  });

  it('should be created', inject([DisplayBuildingsService], (service: DisplayBuildingsService) => {
    expect(service).toBeTruthy();
  }));
});
