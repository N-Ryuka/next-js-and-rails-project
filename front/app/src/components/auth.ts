import { useRouter } from "next/router";
import { FC, useEffect } from "react";

/* hooks */
import { useAuth } from "../contexts/AuthContext";

/**
 * props
 */
type Props = {
  children: any;
};

export const LoginRequired: FC<Props> = (props: Props) => {
  /* props */
  const { children } = props;

  /* hooks */
  const { isSignedIn, loading } = useAuth();

  /* router */
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isSignedIn) router.replace("/sign-up");
  }, [isSignedIn, loading]);

  return children;
};
