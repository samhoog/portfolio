import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightflixAboutComponent } from './knightflix-about.component';

describe('KnightflixAboutComponent', () => {
  let component: KnightflixAboutComponent;
  let fixture: ComponentFixture<KnightflixAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnightflixAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnightflixAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
