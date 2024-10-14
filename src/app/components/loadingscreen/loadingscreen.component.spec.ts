import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingscreenComponent } from './loadingscreen.component';

describe('LoadingscreenComponent', () => {
  let component: LoadingscreenComponent;
  let fixture: ComponentFixture<LoadingscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
