import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
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
        transform: 'scaleX(1)',
        width: '80%',
      })),
      transition('visible => hidden', animate('1000ms ease-out')),
    ])
  ]
})
export class HomeComponent implements OnInit {

  isVisible = true;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = false;
    }, 100); // Delay to allow for the view to render
  }
}