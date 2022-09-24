import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  memo,
} from "react";

import { User } from "../interfaces/index";
import { getCurrentUser } from "../lib/api/auth";

export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  }
);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const res = await getCurrentUser();

        if (res?.data.isLogin === true) {
          setIsSignedIn(true);
          setCurrentUser(res?.data.data);
        } else {
          console.log("No current user");
        }
      } catch (err) {
        console.log(err.response);
      }
      setLoading(false);
    })();
  }, [setCurrentUser]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
