import { useRouter } from "next/router";
import { useEffect, useContext } from "react";

import { useAuth } from "../contexts/AuthContext";
// import { AuthContext } from "../pages/_app";

export const Auth = ({ children }) => {
  const router = useRouter();
  const { isSignedIn, loading } = useAuth();
  // const { loading, isSignedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !isSignedIn) router.replace("/sign-up");
  }, [isSignedIn, loading]);

  return children;
};
