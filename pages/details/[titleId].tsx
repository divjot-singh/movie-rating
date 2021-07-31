import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import MovieDetailsComponent from "../../components/MovieDetails";
import {
  API_URLS,
  SomeTitles,
  TempTitleData,
  TempTrailerData,
} from "../../constants/constants";
import Head from "next/head";

import NetworkUtil from "../../constants/networkUtil";
import MovieDetails, { MovieDetailsInterface } from "../../models/movieDetails";
import TrailerData, { TrailerDataInterface } from "../../models/trailer";

interface MovieDetailsProps {
  movie: MovieDetailsInterface | null;
  trailer: TrailerDataInterface | null;
  error?: Error;
}

const MovieDetailPage = ({ movie, error, trailer }: MovieDetailsProps) => {
  if (!movie)
    return (
      <div>
        {error?.name} | {error?.message}
      </div>
    );
  const movieDetails = new MovieDetails(movie);
  const trailerDetails = trailer ? new TrailerData(trailer) : null;
  MovieDetailsComponent;
  return (
    <>
      <Head>
        <title>{movieDetails.fullTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MovieDetailsComponent
        movieDetails={movieDetails}
        trailer={trailerDetails}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    let paths: { params: { titleId: string } }[] = [];
    paths = SomeTitles.map((titleId: string) => {
      return {
        params: {
          titleId,
        },
      };
    });
    return {
      paths,
      fallback: true,
    };
  };
export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<MovieDetailsProps> | undefined> => {
  const titleId: string = (context?.params?.titleId as string) || "";
  console.log(titleId);
  //   return {
  //     props: {
  //       movie: TempTitleData,
  //       trailer: TempTrailerData,
  //     },
  //   };
  if (titleId) {
    const url = API_URLS.get_details.replace(":titleId", titleId);
    const details: any = await NetworkUtil.get(url);
    const trailerUrl = API_URLS.get_trailer.replace(":titleId", titleId);
    const trailer: any = await NetworkUtil.get(trailerUrl);
    if (details.type !== "error") {
      return {
        props: {
          movie: details,
          trailer: trailer.type !== "error" ? trailer : null,
        },
      };
    }
    console.log("lalala");
    return {
      props: {
        movie: null,
        error: details,
        trailer: null,
      },
    };
  }
};
export default MovieDetailPage;
