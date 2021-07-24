import TrailerData from "../../models/trailer";
import Image from "next/image";
import styles from "../../styles/MovieDetails.module.scss";
import { useState } from "react";
import { PlayCircleFilledOutlined } from "@material-ui/icons";

interface PosterComponentProps {
  imageUrl: string;
  trailer: TrailerData | null;
}

const PosterComponent = ({
  imageUrl,
  trailer,
}: PosterComponentProps): JSX.Element => {
  const [showTrailerIframe, setShowTrailerIframe] = useState(false);
  let childComponent: JSX.Element;

  if (trailer && trailer.linkEmbed) {
    let trailerComponent: JSX.Element = (
      <div className={styles.startTrailer}>
        <iframe
          src={`${trailer.linkEmbed}?width=640&autoplay=${showTrailerIframe}`}
          width="640"
          height="360"
          allowFullScreen={true}
          frameBorder={"no"}
          scrolling="no"
          className={showTrailerIframe ? "" : styles.hide}
        />
        <div
          className={`${styles.startTrailerImage} ${
            showTrailerIframe ? styles.hide : ""
          }`}
        >
          <Image
            src={trailer.thumbnailUrl}
            alt="poster"
            layout={"intrinsic"}
            height={360}
            width={640}
            className={styles.banner}
          />

          <div className={styles.playOverlay}></div>
          <div
            className={styles.playButton}
            onClick={() => setShowTrailerIframe(true)}
          >
            <PlayCircleFilledOutlined />
          </div>
        </div>
      </div>
    );

    childComponent = (
      <>
        <Image
          src={imageUrl}
          alt="poster"
          layout={"intrinsic"}
          height={360}
          width={240}
          className={styles.banner}
        />
        {trailerComponent}
      </>
    );
  } else {
    childComponent = (
      <Image
        src={imageUrl}
        alt="poster"
        layout={"intrinsic"}
        height={360}
        width={240}
        className={styles.banner}
      />
    );
  }

  return <div className={styles.trailerContainer}>{childComponent}</div>;
};

export default PosterComponent;
