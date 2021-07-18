import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import ShowListCard from "../../components/ShowListCard";
import { API_URLS, tempData } from "../../constants/constants";
import NetworkUtil from "../../constants/networkUtil";
import MovieDetails from "../../models/movieDetails";

interface MovieDetailsProps {
  movie: MovieDetails;
}

const MovieDetailComponent = ({ movie }: MovieDetailsProps) => {
  console.log("movie", movie);
  return <ShowListCard show={movie} />;
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    let paths: { params: { movieId: string } }[] = [];
    // const response: any = await NetworkUtil.get(
    //   API_URLS.get_most_popular_movies
    // );
    // if (Array.isArray(response)) {
    //   paths = response.map((moviePath: string) => {
    //     const pathArray = moviePath.split("/");
    //     const movieId = pathArray[pathArray.length - 2];
    //     return {
    //       params: {
    //         movieId,
    //       },
    //     };
    //   });
    // }
    paths = tempData.map((movie: MovieDetails) => {
      const pathArray = movie.id.split("/");
      const movieId = pathArray[pathArray.length - 2];
      return {
        params: {
          movieId,
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
  const movieId: string = (context?.params?.movieId as string) || "";
  if (movieId) {
    const details: any = await NetworkUtil.get(API_URLS.get_details, {
      tconst: movieId,
    });
    if (details.type !== "error") {
      details["tmdbId"] = movieId;
      return {
        props: {
          movie: details as MovieDetails,
        },
      };
    }
    // const details = tempData.find((movie: MovieDetails) => {
    //   return movie.id.includes(movieId);
    // });
    return {
      props: {
        movie: details as MovieDetails,
      },
    };
  }
};
export default MovieDetailComponent;
