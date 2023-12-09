import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/usersService";
import { useQuery } from "@tanstack/react-query";
import { LauchScreen } from "../../view/components/LauchScreen/LauchScreen";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['auth', 'check'],
    queryFn: () => usersService.checkAuth(),
    staleTime: 3600,
    enabled: signedIn,
  });


  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);


  useEffect(() => {
    if(isError){
      signout()
    }
  },[isError, signout]);

  return(
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout
      }}
    >
      <LauchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
