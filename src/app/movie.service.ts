import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Movie{
  Title: string;
  Year: string ;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface MovieResponse{
  Search:Movie[];
  totalResults:string;
  Response: string;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  searchMovie(name:string){
    return this.http.get<MovieResponse>(`https://www.omdbapi.com/?apikey=a2b07930&s=${name}&page=$1}`)
  }

  selectedMovie(imdbID:string){
    return this.http.get<Movie[]>(`https://www.omdbapi.com/?apikey=a2b07930&i=${imdbID}`)

  }

}
