import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeboostComponent } from './gradeboost.component';

describe('GradeboostComponent', () => {
  let component: GradeboostComponent;
  let fixture: ComponentFixture<GradeboostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeboostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeboostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
