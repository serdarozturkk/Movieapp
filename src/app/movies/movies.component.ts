import { Component } from '@angular/core';
import { Movie } from '../models/movies';
import { Movierepo } from '../models/movierepo';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movierepo:Movierepo;
  movies:Movie[];
  popularMovies:Movie[];
  title="Film Listesi";

  
  constructor(){
    this.movierepo=new Movierepo();
    this.movies=this.movierepo.getMovies();
    this.popularMovies=this.movierepo.getPopularMovie();


  }

    

}
