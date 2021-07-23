import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Link from "next/link";
import ShowListCard from "../components/ShowListCard";
import { API_URLS, Filters } from "../constants/constants";
import NetworkUtil from "../constants/networkUtil";
import InTheaterTitle, {
  InTheaterTitleInterface,
} from "../models/inTheaterTitle";
import TitleInfo, { TitleInfoInterface } from "../models/titleInfo";

import styles from "../styles/Home.module.scss";

interface HomeProps {
  titles: (InTheaterTitleInterface | TitleInfoInterface)[];
  filter: Filters;
  error?: Error;
}

const Home = ({ titles, error, filter }: HomeProps) => {
  if (error) {
    return (
      <h2>
        {error.name} | {error.message}
      </h2>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {Object.entries(Filters).map(
          ([currentFilterKey, currentFilter]: [key: string, value: string]) => {
            console.log(currentFilter);
            return (
              <Link href={`/${currentFilterKey}`} passHref key={currentFilter}>
                <div
                  className={`${styles.filter} ${
                    filter === currentFilterKey ? styles.selected : ""
                  }`}
                >
                  {currentFilter}
                </div>
              </Link>
            );
          }
        )}
      </div>
      <div className={styles.list}>
        {titles.map((title: InTheaterTitleInterface | TitleInfoInterface) => {
          let titleAsClass: TitleInfo | InTheaterTitle;
          if (
            filter === Filters.coming_soon ||
            filter === Filters.in_theatres
          ) {
            titleAsClass = new InTheaterTitle(title as InTheaterTitleInterface);
          } else {
            titleAsClass = new TitleInfo(title as TitleInfoInterface);
          }
          return (
            <ShowListCard key={title.id} title={titleAsClass} filter={filter} />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    let paths: { params: { filter: Filters } }[] = [];
    paths = Object.keys(Filters).map((filter) => {
      return {
        params: {
          filter: filter as Filters,
        },
      };
    });
    return { paths, fallback: false };
  };
export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<HomeProps>> => {
  const filter: Filters = (context?.params?.filter as Filters) || "";
  const data: any = await NetworkUtil.get(API_URLS[filter]);
  if (data.type !== "error") {
    return {
      props: {
        titles: data.items,
        filter,
      },
    };
  }
  return {
    props: {
      titles: [],
      error: data,
      filter,
    },
  };
};
export default Home;
