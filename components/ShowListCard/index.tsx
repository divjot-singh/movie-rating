import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";
import MovieDetails from "../../models/movieDetails";
import styles from "../../styles/ShowListCard.module.scss";

interface ShowListCardProps {
  show: MovieDetails;
}

const ShowListCard = ({ show }: ShowListCardProps) => {
  return (
    <Link href={`/details/${show.imdbId}`} passHref>
      <div className={styles.showCard}>
        <Image
          src={show.title.image.url}
          alt="poster"
          layout={"intrinsic"}
          height={513}
          width={342}
          className={styles.showCardBanner}
        />
        <div className={styles.showCardContent}>
          <h2 className={styles.showCardTitle}>{show.title.title}</h2>
          <div className={styles.showCardGenres}>
            {show.genres.map((genre: string, index: number) => {
              return (
                <>
                  <div key={genre}>{genre}</div>
                  <span key={genre + "|"}>
                    {index < show.genres.length - 1 ? "|" : ""}
                  </span>
                </>
              );
            })}
          </div>
          <div className={styles.showCardYear}>
            <span className={styles.label}>Year:</span> {show.title.year}
          </div>
          <div className={styles.showCardRating}>
            <span className={styles.label}>IMDB Rating:</span>{" "}
            {show.ratings.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShowListCard;
