/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuerydbService } from './querydb.service';

describe('QuerydbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuerydbService]
    });
  });

  it('should ...', inject([QuerydbService], (service: QuerydbService) => {
    expect(service).toBeTruthy();
  }));
});
