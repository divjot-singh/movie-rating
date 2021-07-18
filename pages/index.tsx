import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { API_URLS, tempData, Titles } from "../constants/constants";
import React, { useEffect } from "react";
import router from "next/router";
import NetworkUtil from "../constants/networkUtil";
import MovieDetails from "../models/movieDetails";
import { GetStaticPropsResult } from "next";
import ShowListCard from "../components/ShowListCard";

interface HomePageProps {
  movies: MovieDetails[];
  moviesList: string[];
}

export default function Home({ movies, moviesList }: HomePageProps) {
  console.log(movies);
  console.log(moviesList);
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {movies.map((movie: MovieDetails) => {
          return <ShowListCard key={movie.id} show={movie} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<HomePageProps>
> {
  const response: any = await NetworkUtil.get(API_URLS.get_most_popular_movies);
  //   const movies: MovieDetails[] = [],
  //     moviesList: string[] = [];
  //   if (Array.isArray(response)) {
  //     for (let i = 0; i < Math.min(response.length, 10); i++) {
  //       const moviePath: string = response[i];
  //       const pathArray = moviePath.split("/");
  //       const movieId = pathArray[pathArray.length - 2];
  //       moviesList.push(movieId);
  //       console.log(movieId);
  //       const details: any = await NetworkUtil.get(API_URLS.get_details, {
  //         tconst: movieId,
  //       });
  //       if (details.type !== "error") {
  //         details["imdbId"] = movieId;
  //         movies.push(details as MovieDetails);
  //       }
  //     }
  //   }
  const movies: MovieDetails[] = tempData;
  const moviesList = Titles.map((title: string) => {
    const titleArray = title.split("/");
    return titleArray[titleArray.length - 2];
  });
  return {
    props: {
      movies: movies || [],
      moviesList,
    },
    revalidate: 60 * 60 * 24,
  };
}
