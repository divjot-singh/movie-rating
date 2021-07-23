export interface InTheaterTitleInterface {
  contentRating: string;
  directorsList: { id: string; name: string }[];
  directors: string;
  fullTitle: string;
  genres: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  plot: string;
  releaseState: string;
  runtimeStr: string;
  starsList: { id: string; name: string }[];
  stars: string;
  title: string;
  year: string;
}
export default class InTheaterTitle implements InTheaterTitleInterface {
  contentRating: string;
  directorsList: { id: string; name: string }[];
  directors: string;
  fullTitle: string;
  genres: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  plot: string;
  releaseState: string;
  runtimeStr: string;
  starsList: { id: string; name: string }[];
  stars: string;
  title: string;
  year: string;
  constructor(title: InTheaterTitleInterface) {
    this.contentRating = title.contentRating;
    this.fullTitle = title.fullTitle;
    this.id = title.id;
    this.imDbRating = title.imDbRating;
    this.imDbRatingCount = title.imDbRatingCount;
    this.image = title.image;
    this.directorsList = title.directorsList;
    this.year = title.year;
    this.title = title.title;
    this.plot = title.plot;
    this.directors = title.directors;
    this.releaseState = title.releaseState;
    this.runtimeStr = title.runtimeStr;
    this.starsList = title.starsList;
    this.stars = title.stars;
    this.genres = title.genres;
  }
}
