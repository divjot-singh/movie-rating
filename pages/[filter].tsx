import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import ShowListCard from "../components/ShowListCard";
import { API_URLS, Filters } from "../constants/constants";
import NetworkUtil from "../constants/networkUtil";
import InTheaterTitle, {
  InTheaterTitleInterface,
} from "../models/inTheaterTitle";
import TitleInfo, { TitleInfoInterface } from "../models/titleInfo";

import styles from "../styles/Home.module.scss";
import Filter from "../components/Filter/filter";

interface HomeProps {
  titles: (InTheaterTitleInterface | TitleInfoInterface)[];
  filter: Filters;
  error?: Error;
}

const Home = ({ titles, error, filter }: HomeProps) => {
  console.log(error);
  if (error) {
    return (
      <h2>
        {error.name} | {error.message}
      </h2>
    );
  }
  const filterEntry: [string, string] | undefined = Object.entries(
      Filters
    ).find((entry: [string, string]) => {
      return entry[0] === filter;
    }),
    filterValue: string = filterEntry ? filterEntry[1] : filter;
  return (
    <>
      <Head>
        <title>{filterValue}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <Filter filter={filter} />
        <div className={styles.list}>
          {titles.map((title: InTheaterTitleInterface | TitleInfoInterface) => {
            let titleAsClass: TitleInfo | InTheaterTitle;
            if (
              filter === Filters.coming_soon ||
              filter === Filters.in_theatres
            ) {
              titleAsClass = new InTheaterTitle(
                title as InTheaterTitleInterface
              );
            } else {
              titleAsClass = new TitleInfo(title as TitleInfoInterface);
            }
            return (
              <ShowListCard
                key={title.id}
                title={titleAsClass}
                filter={filter}
              />
            );
          })}
        </div>
      </div>
    </>
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
  console.log(data);
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
