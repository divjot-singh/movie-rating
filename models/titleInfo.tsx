export interface TitleInfoInterface {
  crew?: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  imDbRatingCount?: string;
  image: string;
  rank?: string;
  title: string;
  year: string;
  rankUpDown?: string;
  genres?: string;
}

export default class TitleInfo implements TitleInfoInterface {
  crew?: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  imDbRatingCount?: string;
  image: string;
  rank?: string;
  title: string;
  year: string;
  rankUpDown?: string;
  genres?: string;
  constructor(title: TitleInfoInterface) {
    this.fullTitle = title.fullTitle;
    this.id = title.id;
    this.imDbRating = title.imDbRating;
    this.imDbRatingCount = title?.imDbRatingCount;
    this.image = title.image;
    this.rank = title?.rank;
    this.year = title.year;
    this.title = title.title;
    this.rankUpDown = title?.rankUpDown;
    this.crew = title?.crew;
    this.genres = title?.genres;
  }
}
