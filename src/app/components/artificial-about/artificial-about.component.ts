import { AfterViewInit, OnInit, Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoadingScreen2Component } from '../loadingscreen2/loadingscreen2.component';

@Component({
  selector: 'artificial-about',
  standalone: true,
  imports: [NavbarComponent, CommonModule, LoadingScreen2Component],
  templateUrl: './artificial-about.component.html',
  styleUrl: './artificial-about.component.css'
})
export class ArtificialAboutComponent implements OnInit, AfterViewInit{
  @ViewChildren('hidden') hiddenElements!: QueryList<ElementRef>;
  observer! : IntersectionObserver;

  samHovered = false;
  showOverlay = true;
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 1000); // Delay to allow for the view to render
    window.scrollTo(0, 0); // Scroll to the top
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    this.hiddenElements.forEach((el) => this.observer.observe(el.nativeElement));
  }

  onSamMouseEnter() {
    this.samHovered = true;
  }

  onSamMouseLeave() {
    this.samHovered = false;
  }
}