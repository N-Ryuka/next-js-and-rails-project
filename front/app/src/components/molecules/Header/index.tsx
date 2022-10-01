import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import Cookies from "js-cookie";

import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

/* hooks */
import { useAuth } from "../../../contexts/AuthContext";
/* api */
import { signOut } from "../../../lib/api/auth";

/**
 * Header
 * @returns
 */
export const Header = () => {
  /* hooks */
  const toast = useToast();
  const { setIsSignedIn, isSignedIn } = useAuth();

  /* hooks */
  const router = useRouter();

  // サインアウト
  const handleSignOut = useCallback(async () => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);

        toast({
          title: "Succeeded in sign out",
          status: "success",
          position: "top",
          isClosable: true,
        });

        router.replace("/sign-in");
      } else {
        console.log("Failed in sign out");
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
  }, []);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">HOME</Link>
          <HStack as={"nav"} spacing={4} display={{ base: "flex" }}>
            {isSignedIn ? (
              <>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
                <Link href="">
                  <a onClick={() => handleSignOut()}>Sign Out</a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <a>Sign In</a>
                </Link>
                <Link href="/sign-up">
                  <a>Sign Up</a>
                </Link>
              </>
            )}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};
