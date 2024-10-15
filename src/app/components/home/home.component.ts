import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TextScrambleService } from '../../services/TextScramble/text-scramble.service';
import { GradeboostComponent } from '../gradeboost/gradeboost.component';
import { SceneComponent } from '../scene/scene.component';
import { KnightflixComponent } from '../knightflix/knightflix.component';
import { ArtificialComponent } from '../art-ificial/art-ificial.component';
import { LoadingScreenComponent } from '../loadingscreen/loadingscreen.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [SceneComponent, GradeboostComponent, KnightflixComponent, ArtificialComponent, LoadingScreenComponent, CommonModule, NavbarComponent],
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
export class HomeComponent implements OnInit {
  @ViewChild('scrambleElement', { static: true }) scrambleElement!: ElementRef;
  isVisible = true;
  readonly Scene = SceneComponent;
  showOverlay = true;

  constructor(private textScrambleService: TextScrambleService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showOverlay = false;
    }, 2500); // Delay to allow for the view to render

    setTimeout(() => {
      this.isVisible = false;
    }, 2600); // Delay to allow for the view to render

    setTimeout(() => {
      this.textScrambleService.init(this.scrambleElement.nativeElement);
      this.textScrambleService.setText("<i>Full Stack Developer");
    }, 3300)

  }
  
}