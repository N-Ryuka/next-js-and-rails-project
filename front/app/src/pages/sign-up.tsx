import NLink from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import React, { useState, useCallback } from "react";
import Cookies from "js-cookie";

import { chakra, Box, Link, useToast } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

/* hooks */
import { useAuth } from "../contexts/AuthContext";

/* api */
import { signUp } from "../lib/api/auth";

/* types */
import { SignUpParams } from "../interfaces/index";

/* components */
import { PrimaryButton } from "../components/atoms/PrimaryButton";
import { InputForm } from "../components/molecules/InputForm";
import { AuthFormOrganism } from "../components/organisms/AuthFormOrganism";
import { NarrowCenterdTemplate } from "../components/templates/NarrowCenterdTemplate";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

/**
 * SignUp
 * @returns
 */
export const SignUp: NextPage = () => {
  /* hooks */
  const toast = useToast();
  const { setIsSignedIn, setCurrentUser } = useAuth();

  /* router */
  const router = useRouter();

  /* states */
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  // サインアップ
  const handleSignUp = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      /* types */
      const params: SignUpParams = {
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      };

      try {
        const res = await signUp(params);

        if (res.status === 200) {
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          toast({
            title: "Signed up successfully!",
            status: "success",
            position: "top",
            isClosable: true,
          });

          router.replace("/");
        } else {
          console.log("error");
        }
      } catch ({ err: response }) {
        response.data.errors.fullMessages.forEach((error: string) => {
          toast({
            title: error,
            status: "error",
            position: "top",
            isClosable: true,
          });
        });
      }
    },
    [name, email, password, passwordConfirmation]
  );

  return (
    <NarrowCenterdTemplate>
      <AuthFormOrganism>
        <InputForm
          icon={<CFaUserAlt color="gray.300" />}
          value={name}
          setValue={setName}
          type="text"
          placeholder="Name"
        />
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
        <InputForm
          icon={<CFaLock color="gray.300" />}
          value={passwordConfirmation}
          setValue={setPasswordConfirmation}
          type="password"
          placeholder="Password Confirmation"
        />
        <PrimaryButton onClick={handleSignUp}>Sign Up</PrimaryButton>
      </AuthFormOrganism>
      <Box>
        Already have an account?{" "}
        <NLink href="/sign-in">
          <Link color="teal.500">Sign In</Link>
        </NLink>
      </Box>
    </NarrowCenterdTemplate>
  );
};

export default SignUp;
