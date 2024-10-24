import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoadingScreen2Component } from '../loadingscreen2/loadingscreen2.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'artificial-about',
  standalone: true,
  imports: [NavbarComponent, CommonModule, LoadingScreen2Component],
  templateUrl: './artificial-about.component.html',
  styleUrl: './artificial-about.component.css'
})
export class ArtificialAboutComponent implements OnInit {
  samHovered = false;
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
}