import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeboostAboutComponent } from './gradeboost-about.component';

describe('GradeboostAboutComponent', () => {
  let component: GradeboostAboutComponent;
  let fixture: ComponentFixture<GradeboostAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeboostAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeboostAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
