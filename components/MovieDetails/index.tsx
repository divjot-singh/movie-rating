import { getProperImageUrl } from "../../constants/utils";
import MovieDetails from "../../models/movieDetails";
import Image from "next/image";
import styles from "../../styles/MovieDetails.module.scss";

interface PageProps {
  movieDetails: MovieDetails;
}

const MovieDetailsComponent = ({ movieDetails }: PageProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={getProperImageUrl(movieDetails.image)}
        alt="poster"
        layout={"intrinsic"}
        height={513}
        width={342}
        className={styles.banner}
      />
    </div>
  );
};

export default MovieDetailsComponent;
