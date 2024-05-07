export interface MovieRes {
  total : number;
  results : MovieList[];
}

export interface OneMovieRes {
  result : number;
  movie : MovieList;
}

export interface MovieList {
    id: number;
    title: string;
    posterPath: string;
    year: number;
    imdbRating: number;
    overview: string;
    streamingInfo : StreamingInfo;
  }

export interface StreamingInfo {
  [service: string]: {
    [countryCode: string]: {
      link: string;
      added: number;
      leaving: number;
    };
  };
}
