import Cookies from "js-cookie";
import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../../../contexts/AuthContext";
import { signOut } from "../../../../lib/api/auth";

export const Header = () => {
  const { setIsSignedIn, isSignedIn } = useAuth();

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);

        console.log("Succeeded in sign out");

        router.replace("/sign-in");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">Logo</Link>
          <HStack as={"nav"} spacing={4} display={{ base: "flex" }}>
            {isSignedIn ? (
              <>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
                <Link href="">
                  <a onClick={() => handleSignOut()}>Logout</a>
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
