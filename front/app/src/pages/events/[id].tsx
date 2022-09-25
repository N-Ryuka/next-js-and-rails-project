import React, { FC, memo } from "react";
import { Flex, Stack, useToast } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import { Auth } from "../../components/auth";
import { EventCard } from "../../components/common/organisms/EventCard";
import { PrimaryButton } from "../../components/common/atoms/PrimaryButton";
import { Event } from "../../interfaces";
import { joinEvent } from "../../lib/api/event";
import { useAuth } from "../../contexts/AuthContext";

interface Props {
  event: Event;
  joined: boolean;
}

const Event: FC = memo((props: Props) => {
  const { event, joined } = props;
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const res = await joinEvent(event.id);

      if (res.status === 200) {
        console.log(res);

        toast({
          title: "Joined successfully!!",
          status: "success",
          position: "top",
          isClosable: true,
        });
        router.replace("/profile/events");
      } else {
        console.log("error");
      }
    } catch (err) {
      const errors = err.response.data.errors.fullMessages;
      errors.forEach((error: string) => {
        toast({
          title: error,
          status: "error",
          position: "top",
          isClosable: true,
        });
      });
    }
  };

  return (
    <>
      <Auth>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Stack>
            <EventCard
              key={event.name}
              id={event.id}
              name={event.name}
              expected_at={event.expected_at}
              created_at={event.created_at}
              updated_at={event.updated_at}
            />
            {joined ? (
              <PrimaryButton disabled={joined}>Joined</PrimaryButton>
            ) : (
              <PrimaryButton onClick={handleSubmit}>Join</PrimaryButton>
            )}
          </Stack>
        </Flex>
      </Auth>
    </>
  );
});
export default Event;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = parseCookies(context);
  const response = await fetch(
    `http://api:3000/api/v1/events/${context.params.id}`,
    {
      method: "GET",
      headers: {
        "access-token": cookie._access_token,
        client: cookie._client,
        uid: cookie._uid,
      },
    }
  );
  const { event, joined } = await response.json();

  return {
    props: {
      event,
      joined,
    },
  };
};
