import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { Movie, MovieService,} from '../movie.service';

@Component({
  selector: 'app-search-films',
  imports: [InputComponent, FormsModule, CommonModule],
  templateUrl: './search-films.component.html',
  styleUrl: './search-films.component.css',
})
export class SearchFilmsComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];

  handleSearch(searchQuery: string) {
    this.movieService.searchMovie(searchQuery).subscribe(
      (data) => {
        console.log(data);
        this.movies = data.Search|| [];
      },
      (error) => {
        console.error(error);
      }
    );
  }
   
  handleClickMovie(imdbID:string){
    this.movieService.selectedMovie(imdbID).subscribe((data)=>(this.movies = data))

  }
}
