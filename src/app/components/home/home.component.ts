import { Component, QueryList, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TextScrambleService } from '../../services/TextScramble/text-scramble.service';
import { GradeboostComponent } from '../gradeboost/gradeboost.component';
import { SceneComponent } from '../scene/scene.component';
import { KnightflixComponent } from '../knightflix/knightflix.component';
import { ArtificialComponent } from '../art-ificial/art-ificial.component';
import { LoadingScreenComponent } from '../loadingscreen/loadingscreen.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { GradeBoostAboutComponent } from '../gradeboost-about/gradeboost-about.component';
import { LoadingScreen2Component } from '../loadingscreen2/loadingscreen2.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [GradeBoostAboutComponent, RouterModule, SceneComponent, GradeboostComponent, KnightflixComponent, ArtificialComponent, LoadingScreenComponent, LoadingScreen2Component, 
    CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('revealAnimation', [
      state('hidden', style({
        transform: 'scaleX(0)',
        width: '0px',
        transformOrigin: 'left',
        overflow: 'hidden',
      })),
      state('visible', style({
        transformOrigin: 'left',
        transform: 'scaleX(1)',
        width: '105%',
      })),
      transition('visible => hidden', animate('1000ms ease-out')),
    ]),
    trigger('revealAnimation2', [
      state('hidden', style({
        transform: 'scaleX(0)',
        width: '0px',
        transformOrigin: 'left',
        overflow: 'hidden',
      })),
      state('visible', style({
        transformOrigin: 'left',
        transform: 'scaleX(1)',
        width: '100%',
      })),
      transition('visible => hidden', animate('1000ms ease-out')),
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('scrambleElement', { static: true }) scrambleElement!: ElementRef;
  @ViewChildren('hidden') hiddenElements!: QueryList<ElementRef>;
  isVisible = true;
  readonly Scene = SceneComponent;
  showOverlay = true;

  observer! : IntersectionObserver;


  constructor(private textScrambleService: TextScrambleService, private router: Router) {
}

  ngOnInit() {
    window.scrollTo(0, 0); // Scroll to the top
    setTimeout(() => {
      this.showOverlay = false;
    }, 2000); // Delay to allow for the view to render 

    setTimeout(() => {
      this.isVisible = false;
    }, 2100); // Delay to allow for the view to render

    setTimeout(() => {
      this.textScrambleService.init(this.scrambleElement.nativeElement);
      this.textScrambleService.setText("<i>Full Stack Developer");
    }, 2800)
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
  
  onActivate(event: Event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
}

}