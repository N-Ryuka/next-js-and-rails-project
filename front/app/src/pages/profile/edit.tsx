import React, { FC, useState, memo, useCallback, useEffect } from "react";
import {
  Flex,
  Heading,
  Stack,
  chakra,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { Auth } from "../../components/auth";
import { useAuth } from "../../contexts/AuthContext";
import { PrimaryButton } from "../../components/common/atoms/PrimaryButton";
import { InputForm } from "../../components/common/molecules/InputForm";
import { AuthFormOrganism } from "../../components/common/organisms/AuthFormOrganism";
import { UpdateParams } from "../../interfaces";
import { updateProfile } from "../../lib/api/user";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Edit: FC = memo(() => {
  const router = useRouter();
  const toast = useToast();
  const { currentUser, setCurrentUser, setIsSignedIn } = useAuth();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (currentUser?.name) setName(currentUser?.name);
    if (currentUser?.email) setEmail(currentUser?.email);
  }, [currentUser?.name, currentUser?.email]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const params: UpdateParams = {
        name: name,
        email: email,
      };

      try {
        const res = await updateProfile(currentUser.id, params);

        console.log(Cookies.get("_uid"));

        if (res.status === 200) {
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          toast({
            title: "Profile updated successfully!!",
            status: "success",
            position: "top",
            isClosable: true,
          });

          router.replace("/profile");
        } else {
          console.log("error");
        }
      } catch (err) {
        const errors = err.response.data.errors;
        errors.forEach((error: string) => {
          toast({
            title: error,
            status: "error",
            position: "top",
            isClosable: true,
          });
        });
      }
    },
    [name, email, currentUser]
  );

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
          <Heading color="teal.400">Edit</Heading>
          <AuthFormOrganism>
            <InputForm
              icon={<CFaUserAlt color="gray.300" />}
              value={name}
              setValue={setName}
              type="text"
              placeholder="Name"
            />
            <InputForm
              icon={<CFaLock color="gray.300" />}
              value={email}
              setValue={setEmail}
              type="email"
              placeholder="Email"
            />
            <PrimaryButton onClick={handleSubmit}>Update</PrimaryButton>
          </AuthFormOrganism>
        </Stack>
      </Flex>
    </Auth>
  );
});

export default Edit;
