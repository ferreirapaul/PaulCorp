// @ts-nocheck
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieList } from '../../interfaces/movielist';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-display',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
  ],
  template: `
    <section class="listing">
      <img class="listing-poster" src="{{baseURL + movieList.posterPath}}" alt="Cannot found movie poster for {{ movieList.title }}">
      <h2 class="listing-title">{{ movieList.title }}</h2>
      <p class="listing-desc">{{ movieList.year }}</p>
      <p class="listing-desc">Imdb rating : {{ movieList.imdbRating }}</p>
      <p class="listing-desc">{{ movieList.overview }}</p>
      <a [routerLink]="['/details', 'movie', movieList.id]">Details</a>
    </section>
`,
  styleUrl: './movie-display.component.css'
})

export class HousingLocationComponent {
  readonly baseURL = "https://image.tmdb.org/t/p/w780/";
  readonly localURL = "http://localhost:4200/"
  @Input() movieList!: MovieList;
}
