import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import { Stack, useToast } from "@chakra-ui/react";

/* types */
import { Event } from "../../interfaces";
/* api */
import { joinEvent } from "../../lib/api/event";
/* components */
import { LoginRequired } from "../../components/auth";
import { PrimaryButton } from "../../components/atoms/PrimaryButton";
import { EventCard } from "../../components/organisms/EventCard";
import { NarrowCenterdTemplate } from "../../components/templates/NarrowCenterdTemplate";

/* types */
interface Props {
  event: Event;
  joined: boolean;
}

/**
 * Event
 * @param props Props
 * @returns
 */
const Event: NextPage<Props> = (props: Props) => {
  /* props */
  const { event, joined } = props;

  /* hooks */
  const toast = useToast();

  /* router */
  const router = useRouter();

  // イベントに参加
  const handleJoinEvent = async () => {
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
  };

  return (
    <>
      <LoginRequired>
        <NarrowCenterdTemplate>
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
              <PrimaryButton onClick={handleJoinEvent}>Join</PrimaryButton>
            )}
          </Stack>
        </NarrowCenterdTemplate>
      </LoginRequired>
    </>
  );
};
export default Event;

/**
 * getServerSideProps
 * @returns
 */
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
