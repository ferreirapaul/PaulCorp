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
