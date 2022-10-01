import React, { useState, useCallback } from "react";
import NLink from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Cookies from "js-cookie";

import { chakra, Box, Link, useToast } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

/* hooks */
import { useAuth } from "../contexts/AuthContext";
/* api */
import { signIn } from "../lib/api/auth";
/* types */
import { SignInParams } from "../interfaces/index";
/* components */
import { PrimaryButton } from "../components/atoms/PrimaryButton";
import { InputForm } from "../components/molecules/InputForm";
import { AuthFormOrganism } from "../components/organisms/AuthFormOrganism";
import { NarrowCenterdTemplate } from "../components/templates/NarrowCenterdTemplate";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

/**
 * SignIn
 * @returns
 */
export const SignIn: NextPage = () => {
  /* hooks */
  const toast = useToast();
  const { setIsSignedIn, setCurrentUser } = useAuth();

  /* router */
  const router = useRouter();

  /* states */
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // サインイン
  const handleSignIn = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      /* types */
      const params: SignInParams = {
        email: email,
        password: password,
      };

      try {
        const res = await signIn(params);

        if (res.status === 200) {
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          toast({
            title: "Signed in successfully!!",
            status: "success",
            position: "top",
            isClosable: true,
          });

          router.replace("/");
        } else {
          console.log("error");
        }
      } catch ({ err: response }) {
        response.data.errors.forEach((error: string) => {
          toast({
            title: error,
            status: "error",
            position: "top",
            isClosable: true,
          });
        });
      }
    },
    [email, password]
  );

  return (
    <NarrowCenterdTemplate>
      <AuthFormOrganism>
        <InputForm
          icon={<CFaUserAlt color="gray.300" />}
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email address"
        />
        <InputForm
          icon={<CFaLock color="gray.300" />}
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
        />
        <PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
      </AuthFormOrganism>
      <Box>
        New to us?{" "}
        <NLink href="sign-up">
          <Link color="teal.500">Sign Up</Link>
        </NLink>
      </Box>
    </NarrowCenterdTemplate>
  );
};

export default SignIn;
