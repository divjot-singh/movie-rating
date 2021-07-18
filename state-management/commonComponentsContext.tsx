import React, { useState, createContext, useContext, useEffect } from "react";
import CommonComponents from "../components/CommonComponents";
import { LoaderData } from "../components/Loader";
import { SnackbarData, SnackbarTypes } from "../components/Snackbar";

interface PageProps {
  children: JSX.Element;
}
export interface CommonComponentsContextReturnValue {
  isSnackbarVisible: boolean;
  isLoaderVisible: boolean;
  showLoader: Function;
  showSnackbar: Function;
  hideLoader: Function;
  hideSnackbar: Function;
}
export const CommonComponentsContext =
  createContext<CommonComponentsContextReturnValue>({
    isSnackbarVisible: false,
    isLoaderVisible: false,
    showLoader: () => {},
    showSnackbar: () => {},
    hideLoader: () => {},
    hideSnackbar: () => {},
  });

const defaultSnackbarData: SnackbarData = {
  show: false,
  child: "",
  type: SnackbarTypes.error,
};

const defaultLoaderData: LoaderData = {
  show: false,
  child: "",
};

export const CommonComponentsProvider = ({
  children,
}: PageProps): JSX.Element => {
  const [snackbarData, setSnackbarData] =
    useState<SnackbarData>(defaultSnackbarData);
  const [loaderData, setLoaderData] = useState<LoaderData>(defaultLoaderData);

  const showLoader = (child: JSX.Element | string) => {
    setLoaderData({
      show: true,
      child,
    });
  };
  const showSnackbar = (child: JSX.Element | string, type: SnackbarTypes) => {
    setSnackbarData({
      show: true,
      type,
      child,
    });
  };
  const hideLoader = () => {
    console.log("hiding loader");
    setLoaderData(defaultLoaderData);
  };
  const hideSnackbar = () => {
    setSnackbarData(defaultSnackbarData);
  };
  const isSnackbarVisible: boolean = snackbarData.show,
    isLoaderVisible: boolean = loaderData.show;

  return (
    <CommonComponentsContext.Provider
      value={{
        isLoaderVisible,
        isSnackbarVisible,
        hideLoader,
        hideSnackbar,
        showLoader,
        showSnackbar,
      }}
    >
      <CommonComponents snackbarData={snackbarData} loaderData={loaderData} />
      {children}
    </CommonComponentsContext.Provider>
  );
};

const useCommonComponents = () => useContext(CommonComponentsContext);

export default useCommonComponents;
