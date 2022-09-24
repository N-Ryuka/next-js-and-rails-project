import React, { FC, useState, memo, useCallback } from "react";
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
import { signUp } from "../lib/api/auth";
import { SignUpParams } from "../interfaces/index";
import { PrimaryButton } from "../components/common/atoms/PrimaryButton";
import { InputForm } from "../components/common/molecules/InputForm";
import { AuthFormOrganism } from "../components/common/organisms/AuthFormOrganism";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const SignUp: FC = memo(() => {
  const router = useRouter();
  const { setIsSignedIn, setCurrentUser } = useAuth();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

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

          console.log("Signed in successfully!");

          router.replace("/");
        } else {
          console.log("error");
          // setAlertMessageOpen(true);
        }
      } catch (err) {
        console.log(err);
        // setAlertMessageOpen(true);
      }
    },
    [name, email, password, passwordConfirmation]
  );

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
          <PrimaryButton onClick={handleSubmit}>Sign Up</PrimaryButton>
        </AuthFormOrganism>
      </Stack>
      <Box>
        Already have an account?{" "}
        <NLink href="/sign-in">
          <Link color="teal.500">Sign In</Link>
        </NLink>
        <br />
        <NLink href="/">
          <Link color="teal.500">Home</Link>
        </NLink>
      </Box>
    </Flex>
  );
});

export default SignUp;
