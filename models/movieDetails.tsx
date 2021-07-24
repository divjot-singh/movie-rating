import { IdNamePairs, KeyValuePairs } from "./common";
import TitleInfo, { TitleInfoInterface } from "./titleInfo";
import TrailerData, { TrailerDataInterface } from "./trailer";

export interface MovieDetailsInterface {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: string | boolean;
  awards: string;
  directors: string;
  directorList: IdNamePairs[];
  writers: string;
  writerList: IdNamePairs[];
  stars: string;
  starList: IdNamePairs[];
  actorList: { id: string; name: string; image: string; asCharacter: string }[];
  fullCast: object | null;
  genres: string;
  genreList: KeyValuePairs[];
  companies: string;
  companyList: IdNamePairs[];
  countries: string;
  countryList: KeyValuePairs[];
  languages: string;
  languageList: KeyValuePairs[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  trailer: TrailerDataInterface | null;
  boxOffice: BoxOfficeShortInterface | null;
  tagline: string;
  keywords: string;
  keywordList: string[];
  similars: TitleInfoInterface[] | null;
  tvSeriesInfo: TvSeriesInfoInterface | null;
  tvEpisodeInfo: TvEpisodeInfoInterface | null;
}

interface TvSeriesInfoInterface {
  yearEnd: string;
  creators: string;
  seasons: string[];
  creatorsList?: IdNamePairs[];
}

interface TvEpisodeInfoInterface {
  seriesId: string;
  seriesTitle: string;
  seriesFullTitle: string;
  seriesYear: string;
  seriesYearEnd: string;
  seasonNumber: string;
  episodeNumber: string;
  previousEpisodeId: string;
  nextEpisodeId: string;
}

interface BoxOfficeShortInterface {
  budget: string;
  openingWeekendUSA: string;
  cumulativeWorldwideGross: string;
  grossUSA: string;
}

class TvEpisodeInfo {
  seriesId: string;
  seriesTitle: string;
  seriesFullTitle: string;
  seriesYear: string;
  seriesYearEnd: string;
  seasonNumber: string;
  episodeNumber: string;
  previousEpisodeId: string;
  nextEpisodeId: string;
  constructor(data: TvEpisodeInfoInterface) {
    this.seriesId = data.seriesId;
    this.seriesTitle = data.seriesTitle;
    this.seriesFullTitle = data.seriesFullTitle;
    this.seriesYear = data.seriesYear;
    this.seriesYearEnd = data.seriesYearEnd;
    this.seasonNumber = data.seasonNumber;
    this.episodeNumber = data.episodeNumber;
    this.previousEpisodeId = data.previousEpisodeId;
    this.nextEpisodeId = data.nextEpisodeId;
  }
}

class TvSeriesInfo {
  yearEnd: string;
  creators: string;
  seasons: string[];
  creatorsList?: IdNamePairs[];
  constructor(data: TvSeriesInfoInterface) {
    this.yearEnd = data.yearEnd;
    this.creators = data.creators;
    this.seasons = data.seasons;
    this.creatorsList = data.creatorsList;
  }
}

class BoxOfficeShort {
  budget: string;
  openingWeekendUSA: string;
  cumulativeWorldwideGross: string;
  grossUSA: string;
  constructor(data: BoxOfficeShortInterface) {
    this.budget = data.budget;
    this.grossUSA = data.grossUSA;
    this.cumulativeWorldwideGross = data.cumulativeWorldwideGross;
    this.openingWeekendUSA = data.openingWeekendUSA;
  }
}

export default class MovieDetails {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean | string;
  awards: string;
  directors: string;
  directorList: IdNamePairs[];
  writers: string;
  writerList: IdNamePairs[];
  stars: string;
  starList: IdNamePairs[];
  actorList: { id: string; name: string; image: string; asCharacter: string }[];
  fullCast: object | null;
  genres: string;
  genreList: KeyValuePairs[];
  companies: string;
  companyList: IdNamePairs[];
  countries: string;
  countryList: KeyValuePairs[];
  languages: string;
  languageList: KeyValuePairs[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  trailer: TrailerData | null;
  boxOffice: BoxOfficeShort | null;
  tagline: string;
  keywords: string;
  keywordList: string[];
  similars: TitleInfo[] | null;
  tvSeriesInfo: TvSeriesInfo | null;
  tvEpisodeInfo: TvEpisodeInfo | null;
  constructor(data: MovieDetailsInterface) {
    this.id = data.id;
    this.tvEpisodeInfo = data.tvEpisodeInfo
      ? new TvEpisodeInfo(data.tvEpisodeInfo)
      : null;
    this.tvSeriesInfo = data.tvSeriesInfo
      ? new TvSeriesInfo(data.tvSeriesInfo)
      : null;
    this.similars = data.similars
      ? data.similars.map((title: TitleInfoInterface) => new TitleInfo(title))
      : null;
    this.keywordList = data.keywordList;
    this.keywords = data.keywords;
    this.tagline = data.tagline;
    this.boxOffice = data.boxOffice ? new BoxOfficeShort(data.boxOffice) : null;
    this.id = data.id;
    this.title = data.title;
    this.originalTitle = data.originalTitle;
    this.fullTitle = data.fullTitle;
    this.type = data.type;
    this.year = data.year;
    this.image = data.image;
    this.releaseDate = data.releaseDate;
    this.runtimeMins = data.runtimeMins;
    this.runtimeStr = data.runtimeStr;
    this.plot = data.plot;
    this.plotLocal = data.plotLocal;
    this.plotLocalIsRtl = data.plotLocalIsRtl;
    this.awards = data.awards;
    this.directors = data.directors;
    this.directorList = data.directorList;
    this.writers = data.writers;
    this.writerList = data.writerList;
    this.starList = data.starList;
    this.actorList = data.actorList;
    this.fullCast = data.fullCast;
    this.genres = data.genres;
    this.genreList = data.genreList;
    this.companies = data.companies;
    this.companyList = data.companyList;
    this.countries = data.countries;
    this.countryList = data.countryList;
    this.languages = data.languages;
    this.languageList = data.languageList;
    this.contentRating = data.contentRating;
    this.imDbRating = data.imDbRating;
    this.imDbRatingVotes = data.imDbRatingVotes;
    this.metacriticRating = data.metacriticRating;
    this.stars = data.stars;
    this.trailer = data.trailer ? new TrailerData(data.trailer) : null;
  }
}
