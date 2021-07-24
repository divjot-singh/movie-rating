import { getProperImageUrl, getVoteCountSuffix } from "../../constants/utils";
import MovieDetails from "../../models/movieDetails";
import Image from "next/image";
import styles from "../../styles/MovieDetails.module.scss";
import TrailerData from "../../models/trailer";
import PosterComponent from "../PosterComponent";
import { Star } from "@material-ui/icons";
import TitleInfo from "../../models/titleInfo";
import ShowListCard from "../ShowListCard";
interface PageProps {
  movieDetails: MovieDetails;
  trailer: TrailerData | null;
}

const MovieDetailsComponent = ({ movieDetails, trailer }: PageProps) => {
  const handleActorClick = (actorId: string) => {
    window.open(`https://imdb.com/name/${actorId}`);
  };
  console.log(movieDetails);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <div className={styles.title}>{movieDetails.fullTitle}</div>
          <div className={styles.info}>
            {movieDetails.year}
            {" . "}
            {movieDetails.contentRating}
            {movieDetails.runtimeStr ? " . " : ""}
            {movieDetails.runtimeStr}
          </div>
        </div>
        <div className={styles.ratingInfo}>
          {movieDetails.imDbRating && (
            <div className={styles.imdbRating}>
              <span className={styles.label}>IMDB Rating</span>
              <span className={styles.imdbRatingInfo}>
                <Star />
                <span className={styles.ratingAndVotesContainer}>
                  <span className={styles.rating}>
                    {movieDetails.imDbRating}
                  </span>
                  <span className={styles.votes}>
                    ({getVoteCountSuffix(movieDetails.imDbRatingVotes)})
                  </span>
                </span>
                <span className={styles.perTen}>/10</span>
              </span>
            </div>
          )}
          {movieDetails.imDbRating && (
            <div className={styles.imdbRating}>
              <span className={styles.label}>IMDB Rating</span>

              <span className={styles.imdbRatingInfo}>
                <Star />
                <span className={styles.ratingAndVotesContainer}>
                  <span className={styles.rating}>
                    {movieDetails.imDbRating}
                  </span>
                  <span className={styles.votes}>
                    ({getVoteCountSuffix(movieDetails.imDbRatingVotes)})
                  </span>
                </span>
                <span className={styles.perTen}>/10</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <PosterComponent
        trailer={trailer}
        imageUrl={getProperImageUrl(movieDetails.image)}
      />
      <div className={styles.details}>
        <div className={styles.genres}>
          {movieDetails.genres.split(", ").map((genre: string) => {
            return (
              <div className={styles.genre} key={genre}>
                {genre}
              </div>
            );
          })}
        </div>

        <div className={styles.synopsis}>{movieDetails.plot}</div>
        {movieDetails.directors && (
          <div className={styles.directorsContainer}>
            <span className={styles.label}>Directors:</span>
            <span className={styles.directorsList}>
              {movieDetails.directorList.map(
                (director: { id: string; name: string }) => {
                  return (
                    <span
                      onClick={() => handleActorClick(director.id)}
                      key={director.id}
                    >
                      {director.name}
                    </span>
                  );
                }
              )}
            </span>
          </div>
        )}
        {movieDetails.tvSeriesInfo && (
          <>
            <div className={styles.tvSeriesInfo}>
              <span className={styles.label}>Seasons: </span>
              <span className={styles.noOfSeasons}>
                {movieDetails.tvSeriesInfo.seasons.length}
              </span>
            </div>
            {movieDetails.tvSeriesInfo.creatorsList && (
              <div className={styles.directorsContainer}>
                <span className={styles.label}>Directors:</span>
                <span className={styles.directorsList}>
                  {movieDetails.tvSeriesInfo.creatorsList.map(
                    (creator: { id: string; name: string }) => {
                      return (
                        <span
                          onClick={() => handleActorClick(creator.id)}
                          key={creator.id}
                        >
                          {creator.name}
                        </span>
                      );
                    }
                  )}
                </span>
              </div>
            )}
          </>
        )}
        <div className={styles.actorsListContainer}>
          <div className={styles.label}>Stars</div>
          <div className={styles.actorsList}>
            {movieDetails.actorList.map((actor) => {
              return (
                <div
                  key={actor.id}
                  className={styles.actorCard}
                  onClick={() => handleActorClick(actor.id)}
                >
                  <Image
                    src={actor.image}
                    alt="poster"
                    layout={"fixed"}
                    height={120}
                    width={120}
                    className={styles.actorImage}
                  />
                  <span className={styles.actorName}>{actor.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        {movieDetails.awards && (
          <div className={`${styles.awards} ${styles.genres}`}>
            {movieDetails.awards.split(" | ").map((award: string) => {
              return (
                <div className={styles.genre} key={award}>
                  {award}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.similarListContainer}>
        <div className={styles.label}>Similar titles:</div>
        <div className={styles.similarsList}>
          {movieDetails.similars?.map((movie: TitleInfo) => {
            return <ShowListCard title={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
