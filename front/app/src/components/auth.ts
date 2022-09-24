import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "../contexts/AuthContext";

export const Auth = ({ children }) => {
  const router = useRouter();
  const { isSignedIn, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isSignedIn) router.replace("/sign-up");
  }, [isSignedIn, loading]);

  return children;
};
