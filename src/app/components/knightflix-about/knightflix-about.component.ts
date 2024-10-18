import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'knightflix-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './knightflix-about.component.html',
  styleUrl: './knightflix-about.component.css'
})
export class KnightflixAboutComponent {
  constructor(private router: Router) { }

}
