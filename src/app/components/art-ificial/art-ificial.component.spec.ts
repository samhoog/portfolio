import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtIficialComponent } from './art-ificial.component';

describe('ArtIficialComponent', () => {
  let component: ArtIficialComponent;
  let fixture: ComponentFixture<ArtIficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtIficialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtIficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
