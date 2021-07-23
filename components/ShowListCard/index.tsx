import Image from "next/image";
import Link from "next/link";
import { Filters } from "../../constants/constants";
import { getProperImageUrl } from "../../constants/utils";
import InTheaterTitle from "../../models/inTheaterTitle";
import TitleInfo from "../../models/titleInfo";
import styles from "../../styles/ShowListCard.module.scss";

interface ShowListCardProps {
  title: InTheaterTitle | TitleInfo;
  filter?: Filters;
}

const ShowListCard = ({ title, filter }: ShowListCardProps) => {
  return (
    <Link href={`/details/${title.id}`} passHref>
      <div className={styles.showCard}>
        <Image
          src={getProperImageUrl(title.image)}
          alt="poster"
          layout={"intrinsic"}
          height={513}
          width={342}
          className={styles.showCardBanner}
        />
        <div className={styles.showCardContent}>
          <h2 className={styles.showCardTitle}>{title.title}</h2>
          {(() => {
            if (title instanceof InTheaterTitle) {
              return (
                <div className={styles.showCardGenres}>
                  {title.genres.split(", ").join(" | ")}
                </div>
              );
            }
          })()}

          <div className={styles.showCardYear}>
            <span className={styles.label}>Year:</span> {title.year}
          </div>

          {title.imDbRating && (
            <div className={styles.showCardRating}>
              <span className={styles.label}>IMDB Rating:</span>{" "}
              {title.imDbRating}
            </div>
          )}
          {(() => {
            if (title instanceof InTheaterTitle) {
              let text: JSX.Element;
              if (filter === Filters.coming_soon) {
                text = (
                  <>
                    Releasing on - <span>{title.releaseState}</span>
                  </>
                );
              } else {
                let statusParts: string[] = title.releaseState.split("-");
                if (statusParts.length > 0) {
                  text = (
                    <>
                      {statusParts[0]} - <span>{statusParts[1]}</span>
                    </>
                  );
                } else {
                  text = <>statusParts</>;
                }
              }
              return <div className={styles.releaseStatus}>{text}</div>;
            }
          })()}
        </div>
      </div>
    </Link>
  );
};

export default ShowListCard;
