import React, { FC, memo, useEffect } from "react";
import { Flex, Heading, Stack, Text, Avatar, Link } from "@chakra-ui/react";
import NLink from "next/link";

import { Auth } from "../../components/auth";
import { useAuth } from "../../contexts/AuthContext";
import { AuthFormOrganism } from "../../components/common/organisms/AuthFormOrganism";

export const Profile: FC = memo(() => {
  const { currentUser } = useAuth();

  return (
    <Auth>
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
          <Heading>Your Information</Heading>
          <AuthFormOrganism>
            <Text>{currentUser.name}</Text>
            <Text>{currentUser.email}</Text>
            <NLink href="profile/edit">
              <Link color="teal.500">change profile</Link>
            </NLink>
            <NLink href="profile/events">
              <Link color="teal.500">see events you are joing</Link>
            </NLink>
          </AuthFormOrganism>
        </Stack>
      </Flex>
    </Auth>
  );
});

export default Profile;
