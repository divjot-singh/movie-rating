import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import MovieDetailsComponent from "../../components/MovieDetails";
import { API_URLS, SomeTitles } from "../../constants/constants";
import NetworkUtil from "../../constants/networkUtil";
import MovieDetails, { MovieDetailsInterface } from "../../models/movieDetails";

interface MovieDetailsProps {
  movie: MovieDetailsInterface | null;
  error?: Error;
}

const MovieDetailPage = ({ movie, error }: MovieDetailsProps) => {
  if (!movie)
    return (
      <div>
        {error?.name} | {error?.message}
      </div>
    );
  const movieDetails = new MovieDetails(movie);
  MovieDetailsComponent;
  return <MovieDetailsComponent movieDetails={movieDetails} />;
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
  if (titleId) {
    const url = API_URLS.get_details.replace(":titleId", titleId);
    const details: any = await NetworkUtil.get(url);
    if (details.type !== "error") {
      return {
        props: {
          movie: details,
        },
      };
    }
    return {
      props: {
        movie: null,
        error: details,
      },
    };
  }
};
export default MovieDetailPage;
