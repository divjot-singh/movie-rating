import TrailerData from "../../models/trailer";
import Image from "next/image";
import styles from "../../styles/MovieDetails.module.scss";
import { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(640);
  useEffect(() => {
    if (typeof window !== "undefined")
      setWindowWidth(Math.floor(Math.min(window.outerWidth * 0.95 - 64, 640)));
  }, []);
  let childComponent: JSX.Element;
  const windowHeight: number = (9 / 16) * windowWidth;
  if (trailer && trailer.linkEmbed) {
    let trailerComponent: JSX.Element = (
      <div className={styles.startTrailer}>
        <iframe
          src={`${trailer.linkEmbed}?width=${windowWidth}&autoplay=${showTrailerIframe}`}
          width={windowWidth}
          height={windowHeight.toString()}
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
            height={windowHeight.toString()}
            width={windowWidth}
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
        <div className={styles.trailerBanner}>
          <Image
            src={imageUrl}
            alt="poster"
            layout={"intrinsic"}
            height={360}
            width={240}
            className={styles.banner}
          />
        </div>
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
