import { FC, useEffect } from "react";
import styles from "../../styles/Header.module.scss";
import {
  useAuth,
  AuthProviderReturnValue,
  AuthenticationObject,
} from "../../state-management/userContext";
import useCommonComponents, {
  CommonComponentsContextReturnValue,
} from "../../state-management/commonComponentsContext";
import { useSession } from "next-auth/client";
const Header: FC = () => {
  const authenticationProviderValue: AuthProviderReturnValue = useAuth();
  const commonComponentsState: CommonComponentsContextReturnValue =
    useCommonComponents();

  // useEffect(() =>{
  // 	if(authenticationProviderValue.loading && !commonComponentsState.isLoaderVisible){
  // 		commonComponentsState.showLoader('Authenticating...');
  // 	} else if(!authenticationProviderValue.loading && commonComponentsState.isLoaderVisible){
  // 		commonComponentsState.hideLoader();
  // 	}
  // },[authenticationProviderValue.loading, commonComponentsState]);
  const handleLogout = () => {
    authenticationProviderValue.logout();
  };
  const handleLogin = () => {
    authenticationProviderValue.login();
  };
  const authenticationObj: AuthenticationObject =
    authenticationProviderValue.authObj;
  return (
    <div className={styles.header}>
      Hi {authenticationObj.userName},
      {(() => {
        if (authenticationObj.isAuthenticated)
          return <div onClick={handleLogout}>Logout</div>;
        else return <div onClick={handleLogin}>Sign in with Google</div>;
      })()}
    </div>
  );
};

export default Header;
