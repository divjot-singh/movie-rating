import Loader, { LoaderData } from "../Loader";
import Snackbar, { SnackbarData } from "../Snackbar";

interface PageProps {
  children?: JSX.Element | null;
  snackbarData: SnackbarData;
  loaderData: LoaderData;
}

const CommonComponents = ({
  children = null,
  snackbarData,
  loaderData,
}: PageProps): JSX.Element => {
  console.log(loaderData);
  return (
    <div>
      <Snackbar snackbarData={snackbarData} />
      <Loader loaderData={loaderData} />
      {children}
    </div>
  );
};

export default CommonComponents;
