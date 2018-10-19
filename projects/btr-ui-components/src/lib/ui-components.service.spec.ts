import { TestBed } from '@angular/core/testing';

import { UiComponentsService } from './ui-components.service';

describe('UiComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiComponentsService = TestBed.get(UiComponentsService);
    expect(service).toBeTruthy();
  });
});
