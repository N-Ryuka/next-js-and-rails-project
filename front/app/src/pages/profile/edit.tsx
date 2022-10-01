import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Cookies from "js-cookie";

import { chakra, useToast } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

/* hooks */
import { useAuth } from "../../contexts/AuthContext";
/* types */
import { UpdateParams } from "../../interfaces";
/* api */
import { updateProfile } from "../../lib/api/user";
/* components */
import { LoginRequired } from "../../components/auth";
import { PrimaryButton } from "../../components/atoms/PrimaryButton";
import { InputForm } from "../../components/molecules/InputForm";
import { AuthFormOrganism } from "../../components/organisms/AuthFormOrganism";
import { NarrowCenterdTemplate } from "../../components/templates/NarrowCenterdTemplate";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

/**
 * Edit
 * @returns
 */
export const Edit: NextPage = () => {
  /* props */
  const { currentUser, setCurrentUser, setIsSignedIn } = useAuth();

  /* router */
  const router = useRouter();

  /* hooks */
  const toast = useToast();

  /* states */
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (currentUser?.name) setName(currentUser?.name);
    if (currentUser?.email) setEmail(currentUser?.email);
  }, [currentUser?.name, currentUser?.email]);

  // プロフィールのアップデート
  const handleUpdateProfile = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      /* types */
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
    [name, email, currentUser]
  );

  return (
    <LoginRequired>
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
            icon={<CFaLock color="gray.300" />}
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Email"
          />
          <PrimaryButton onClick={handleUpdateProfile}>Update</PrimaryButton>
        </AuthFormOrganism>
      </NarrowCenterdTemplate>
    </LoginRequired>
  );
};
export default Edit;
