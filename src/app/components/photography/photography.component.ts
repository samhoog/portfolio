import { Component, OnInit } from '@angular/core';
import { LoadingScreen2Component } from '../loadingscreen2/loadingscreen2.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SceneComponent } from '../scene/scene.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule, LoadingScreen2Component, NavbarComponent, SceneComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent implements OnInit {

  showOverlay = true;
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000); // Delay to allow for the view to render
    window.scrollTo(0, 0); // Scroll to the top
  }

}
