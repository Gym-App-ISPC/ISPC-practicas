import { TestBed } from '@angular/core/testing';

import { ContactoFormService } from './contacto-form.service';

describe('ContactoFormService', () => {
  let service: ContactoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
