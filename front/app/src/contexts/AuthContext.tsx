import React, { createContext, useContext, useState, useEffect } from "react";

/* types */
import { User } from "../interfaces/index";
/* api */
import { getCurrentUser } from "../lib/api/auth";

// Context
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

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * AuthProvider
 * @param props Props
 * @returns
 */
export const AuthProvider = ({ children }: Props) => {
  /* states */
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
        console.log(err);
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
