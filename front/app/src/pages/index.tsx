import React, { FC, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { signOut } from "../lib/api/auth";
import { Auth } from "../components/auth";
import { useAuth } from "../contexts/AuthContext";

const Home: FC = (props) => {
  const router = useRouter();
  const { setIsSignedIn, isSignedIn } = useAuth();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        router.push("/sign-in");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Auth>
        <h1>Logged in sucessfully</h1>
        {isSignedIn ? <h1>ログイン中</h1> : <h1>ログアウト中</h1>}
        {isSignedIn && <button onClick={handleSignOut}>ログアウト</button>}
      </Auth>
    </>
  );
};

export default Home;
