import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreen2Component } from '../loadingscreen2/loadingscreen2.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LoadingScreen2Component, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  showOverlay = true;
  
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000); // Delay to allow for the view to render
    window.scrollTo(0, 0); // Scroll to the top
  }
}
