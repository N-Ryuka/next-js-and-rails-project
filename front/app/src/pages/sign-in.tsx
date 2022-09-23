import React, { FC, useState } from "react";
import {
  Flex,
  Heading,
  Stack,
  chakra,
  Box,
  Link,
  Avatar,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import NLink from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { useAuth } from "../contexts/AuthContext";
import { signIn } from "../lib/api/auth";
import { SignInParams } from "../interfaces/index";
import { PrimaryButton } from "../components/common/atoms/PrimaryButton";
import { InputForm } from "../components/common/molecules/InputForm";
import { AuthFormOrganism } from "../components/common/organisms/AuthFormOrganism";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const SignIn: FC = () => {
  const router = useRouter();
  const { setIsSignedIn, setCurrentUser } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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

        router.push("/");

        console.log("Signed in successfully!");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
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
          <PrimaryButton onClick={handleSubmit}>Sign In</PrimaryButton>
        </AuthFormOrganism>
      </Stack>
      <Box>
        New to us?{" "}
        <NLink href="sign-up">
          <Link color="teal.500">Sign Up</Link>
        </NLink>
      </Box>
    </Flex>
  );
};

export default SignIn;
