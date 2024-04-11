import { Injectable } from '@angular/core';
import { MovieList } from '../interfaces/movielist';
import { querryRes } from '../interfaces/querryres';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  urlR = 'http://localhost:3000/results';
  urlM = 'http://localhost:3001'

  res : querryRes= {
    results: [
      "movie391313",
      "series46025"
    ]

  }

  async getAllMovies(): Promise<MovieList[]> {
    const data = await fetch(this.urlR);
    return await data.json() ?? [];
  }

  async getById(type: string, id: number): Promise<MovieList> {
    //const data = await fetch(`${this.urlM}/${type}/${id}/en`);
    const data = await fetch(`${this.urlM}/${type}`);
    return await data.json() ?? {};
  }

  async getQuerryResult(querry: string): Promise<querryRes> {
    return this.res;
  }
}