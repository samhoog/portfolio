import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoadingScreen2Component } from '../loadingscreen2/loadingscreen2.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'gradeboost-about',
  standalone: true,
  imports: [NavbarComponent, CommonModule, LoadingScreen2Component],
  templateUrl: './gradeboost-about.component.html',
  styleUrl: './gradeboost-about.component.css'
})
export class GradeBoostAboutComponent implements OnInit {
  samHovered = false;
  aelHovered = false;
  justinHovered = false;
  tylerHovered = false;
  showOverlay = true;
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000); // Delay to allow for the view to render
    window.scrollTo(0, 0); // Scroll to the top
  }

  onSamMouseEnter() {
    this.samHovered = true;
  }

  onSamMouseLeave() {
    this.samHovered = false;
  }

  onAelMouseEnter() {
    this.aelHovered = true;
  }

  onAelMouseLeave() {
    this.aelHovered = false;
  }

  onJustinMouseEnter() {
    this.justinHovered = true;
  }

  onJustinMouseLeave() {
    this.justinHovered = false;
  }

  onTylerMouseEnter() {
    this.tylerHovered = true;
  }

  onTylerMouseLeave() {
    this.tylerHovered = false;
  }
}
