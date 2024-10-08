import { TestBed } from '@angular/core/testing';

import { TextScrambleService } from './text-scramble.service';

describe('TextScrambleService', () => {
  let service: TextScrambleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextScrambleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
