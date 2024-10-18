import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadingscreen2Component } from './loadingscreen2.component';

describe('Loadingscreen2Component', () => {
  let component: Loadingscreen2Component;
  let fixture: ComponentFixture<Loadingscreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loadingscreen2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Loadingscreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
