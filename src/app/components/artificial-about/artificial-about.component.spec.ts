import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialAboutComponent } from './artificial-about.component';

describe('ArtificialAboutComponent', () => {
  let component: ArtificialAboutComponent;
  let fixture: ComponentFixture<ArtificialAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtificialAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtificialAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
