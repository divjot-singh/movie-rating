export default interface MovieDetails {
  id: string;
  imdbId: string;
  title: TitleDetails;
  ratings: RatingDetails;
  genres: string[];
  releaseDate: string;
  plotSummary?: PlotDetails;
  plotOutline?: PlotDetails;
  certificates?: any;
}
interface TitleDetails {
  "@type": any;
  id: string;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  runningTimeInMinutes: number;
  nextEpisode?: string;
  numberOfEpisodes?: number;
  seriesEndYear?: number;
  seriesStartYear?: number;
  title: string;
  titleType: string;
  year: number;
}
interface RatingDetails {
  canRate: boolean;
  rating: number;
  ratingCount: number;
  topRank?: number;
  otherRanks?: {
    id: string;
    label: string;
    rank: number;
    rankType: string;
  }[];
}
interface PlotDetails {
  author?: string;
  id: string;
  text: string;
}
