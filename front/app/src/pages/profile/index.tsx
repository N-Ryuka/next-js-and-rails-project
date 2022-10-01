import React from "react";
import NLink from "next/link";
import { NextPage } from "next";

import { Text, Link } from "@chakra-ui/react";

/* hooks */
import { useAuth } from "../../contexts/AuthContext";
/* components */
import { LoginRequired } from "../../components/auth";
import { AuthFormOrganism } from "../../components/organisms/AuthFormOrganism";
import { NarrowCenterdTemplate } from "../../components/templates/NarrowCenterdTemplate";

/**
 * Profile
 * @returns
 */
export const Profile: NextPage = () => {
  /* hooks */
  const { currentUser } = useAuth();

  return (
    <LoginRequired>
      <NarrowCenterdTemplate>
        <AuthFormOrganism>
          <Text>{currentUser?.name}</Text>
          <Text>{currentUser?.email}</Text>
          <NLink href="profile/edit">
            <Link color="teal.500">Change profile</Link>
          </NLink>
          <NLink href="profile/events">
            <Link color="teal.500">See all events you are joining</Link>
          </NLink>
        </AuthFormOrganism>
      </NarrowCenterdTemplate>
    </LoginRequired>
  );
};

export default Profile;
