/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendEmailsService } from './send-emails.service';

describe('SendEmailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendEmailsService]
    });
  });

  it('should ...', inject([SendEmailsService], (service: SendEmailsService) => {
    expect(service).toBeTruthy();
  }));
});
