import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TextScrambleService } from '../../services/TextScramble/text-scramble.service';
import * as THREE from 'three';
import { SceneComponent } from '../scene/scene.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [SceneComponent],
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
        width: '80%',
      })),
      transition('visible => hidden', animate('1000ms ease-out')),
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('scrambleElement', { static: true }) scrambleElement!: ElementRef;
  isVisible = true;
  readonly Scene = SceneComponent;

  constructor(private textScrambleService: TextScrambleService) {}

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = false;
    }, 100); // Delay to allow for the view to render

    setTimeout(() => {
      this.textScrambleService.init(this.scrambleElement.nativeElement);
      this.textScrambleService.setText("Full Stack Developer");
    }, 800)
  }
  
}