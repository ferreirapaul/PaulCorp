import { Injectable } from '@angular/core';
import { MovieList, MovieRes, OneMovieRes } from '../interfaces/movielist';
import { querryRes } from '../interfaces/querryres';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = 'http://localhost:8083';

  res : querryRes= {
    results: [
      "movie391313",
      "series46025"
    ]

  }

  async getAllMovies(): Promise<MovieRes> {
    const data = await fetch(`${this.url}/page`);
    let res = await (await data).json();
    return res;
  }

  async getById(type: string, id: number): Promise<OneMovieRes> {
    const data = await fetch(`${this.url}/infos/${type}/${id}`);
    let res = await (await data).json();
    return res;
  }

  async getQuerryResult(querry: string): Promise<querryRes> {
    const data = await fetch(`${this.url}/query/${querry}`);
    let res = await (await data).json();
    return res;
  }
}