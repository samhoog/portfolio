import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GradeBoostAboutComponent } from './gradeboost-about/gradeboost-about.component';
import { KnightflixAboutComponent } from './knightflix-about/knightflix-about.component';
import { ArtificialAboutComponent } from './artificial-about/artificial-about.component';
import { PhotographyComponent } from './photography/photography.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'gradeboost',
    component: GradeBoostAboutComponent
  },
  {
    path: 'knightflix',
    component: KnightflixAboutComponent
  },
  {
    path: "art-ificialintelligence",
    component: ArtificialAboutComponent
  },
  {
    path: "photography",
    component: PhotographyComponent
  }
];