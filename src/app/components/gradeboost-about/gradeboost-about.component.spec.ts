import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeBoostAboutComponent } from './gradeboost-about.component';

describe('GradeBoostAboutComponent', () => {
  let component: GradeBoostAboutComponent;
  let fixture: ComponentFixture<GradeBoostAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeBoostAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeBoostAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
