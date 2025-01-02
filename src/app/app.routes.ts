import { Routes } from '@angular/router';
import { HomeComponent, ParentComponent } from './main/small.component';
import { MainComponent } from './main/main.component';
import { DzComponent } from './dz/dz.component';
import { NewTodoListComponent } from './new-todo-list/new-todo-list.component';
import { Les3Component } from './les3/les3.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Les1', component: MainComponent },
  { path: 'Les2', component: ParentComponent },
  { path: 'dz', component: DzComponent },
  {path:'new-todo-list', component:NewTodoListComponent},
  {path: 'les3', component: Les3Component},

];
