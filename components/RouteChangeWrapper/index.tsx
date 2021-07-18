import { useRouter } from "next/router";
import { useEffect } from "react";
import useCommonComponents, {
  CommonComponentsContextReturnValue,
} from "../../state-management/commonComponentsContext";

const RouteChangeWrapper = () => {
  const router = useRouter();
  const commonComponentsState: CommonComponentsContextReturnValue =
    useCommonComponents();

  const handleRouteChangeComplete = () => {
    console.log("page loaded");
    commonComponentsState.hideLoader();
  };
  const handleRouteChangeStart = () => {
    console.log("page loading");
    commonComponentsState.showLoader("Loading...");
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);
  return null;
};

export default RouteChangeWrapper;
