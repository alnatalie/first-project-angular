import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export interface MetaMovie {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Actors: string;
}

@Component({
  selector: 'app-modal-window',
  imports: [CommonModule],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.css'
})
export class ModalWindowComponent {
  metaMovies: MetaMovie[] =[];

}
