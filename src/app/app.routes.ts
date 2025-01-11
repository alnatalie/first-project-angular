import { Routes } from '@angular/router';
import { HomeComponent, ParentComponent } from './main/small.component';
import { MainComponent } from './main/main.component';
import { DzComponent } from './dz/dz.component';
import { NewTodoListComponent } from './new-todo-list/new-todo-list.component';
import { Les3Component } from './les3/les3.component';
import { Les4Component } from './les4/les4.component';
import { SearchFilmsComponent } from './search-films/search-films.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'films', component: SearchFilmsComponent},
  { path: 'dz', component: DzComponent },
  { path: 'Les1', component: MainComponent },
  { path: 'Les2', component: ParentComponent },
  {path:'new-todo-list', component:NewTodoListComponent},
  {path: 'les3', component: Les3Component},
  {path: 'les4', component: Les4Component},

];
