import { Routes } from '@angular/router';
import { HomeComponent, ParentComponent } from './main/small.component';
import { MainComponent } from './main/main.component';
import { DzComponent } from './dz/dz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Les1', component: MainComponent },
  { path: 'Les2', component: ParentComponent },
  { path: 'dz', component: DzComponent },
];
