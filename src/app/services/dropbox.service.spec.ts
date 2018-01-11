/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DropboxService } from './dropbox.service';

describe('Service: Dropbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropboxService]
    });
  });

  it('should ...', inject([DropboxService], (service: DropboxService) => {
    expect(service).toBeTruthy();
  }));
});