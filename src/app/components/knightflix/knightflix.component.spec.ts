import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightflixComponent } from './knightflix.component';

describe('KnightflixComponent', () => {
  let component: KnightflixComponent;
  let fixture: ComponentFixture<KnightflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnightflixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnightflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
