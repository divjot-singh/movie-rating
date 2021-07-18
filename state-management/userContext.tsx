import { useState, createContext, useContext, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Session } from "next-auth";

export type AuthenticationObject = {
  isAuthenticated: boolean;
  userId: string;
  userName: string;
  avatar?: string;
};
const defaultAuthObj = {
  isAuthenticated: false,
  userId: "",
  userName: "",
  avatar: "",
};

export interface AuthProviderProps {
  children: JSX.Element;
}
export interface AuthProviderReturnValue {
  authObj: AuthenticationObject;
  login: Function;
  logout: Function;
  loading: boolean;
}

export const AuthContext = createContext<AuthProviderReturnValue>({
  authObj: defaultAuthObj,
  login: () => {},
  logout: () => {},
  loading: false,
});
const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [session, loading] = useSession();
  const getAuthObjectFromSession = (session: Session | null) => {
    return {
      isAuthenticated: !!session,
      userId: session?.user?.email || "",
      userName: session?.user?.name || "",
      avatar: session?.user?.image || "",
    };
  };
  const [authObj, setAuthObj] = useState<AuthenticationObject>(
    getAuthObjectFromSession(session)
  );
  const login = (callbackUrl: string) => {
    signIn("google", {
      callbackUrl: callbackUrl,
    });
  };
  const logout = () => {
    signOut();
  };
  useEffect(() => {
    setAuthObj(getAuthObjectFromSession(session));
  }, [session]);
  const providerReturnValue = {
    authObj,
    login,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={providerReturnValue}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): AuthProviderReturnValue => useContext(AuthContext);
export default AuthProvider;
