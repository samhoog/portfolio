import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'artificial-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './artificial-about.component.html',
  styleUrl: './artificial-about.component.css'
})
export class ArtificialAboutComponent {
  constructor(private router: Router) { }
}
