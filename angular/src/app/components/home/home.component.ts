import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../movie-diplay/movie-display.component';
import { MovieList, MovieRes, OneMovieRes } from '../../interfaces/movielist';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { querryRes } from '../../interfaces/querryres';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template:`
  <section>
    <form>
      <input type="text" placeholder="Search for movies" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
  <app-movie-display
    *ngFor="let movie of filteredList"
    [movieList]="movie">
  </app-movie-display>
  </section>
  `,
  styleUrl: './home.component.css'
})


export class HomeComponent {
  movieList: MovieList[] = [];
  movieService: MoviesService = inject(MoviesService);
  filteredList: MovieList[] = [];

  constructor() {
    this.movieService.getAllMovies().then((res: MovieRes) => {
      this.movieList = res.results;
      this.filteredList = res.results;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.movieList;
      return;
    }
    this.filteredList = []
    this.movieService.getQuerryResult(text).then((res : querryRes) => {
      for (let i in res.results)
      {
          i = res.results[i]
          if (i.includes("movie"))
          {
            this.movieService.getById('movie', parseInt(i.slice(5))).then((j : OneMovieRes) => {
                if(j.movie)
                {
                  this.filteredList.push(j.movie);
                }
            })
          }
      }
    });
    
    return;
  }
}