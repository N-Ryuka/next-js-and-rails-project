import React, { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { Auth } from "../../components/auth";
import { useAuth } from "../../contexts/AuthContext";
import { EventCard } from "../../components/common/organisms/EventCard";
import { Event } from "../../interfaces";

interface Props {
  events: Array<Event>;
}

const Events: FC = memo((props: Props) => {
  const { events } = props;

  return (
    <>
      <Auth>
        <h1>参加するイベント</h1>
        <Wrap p={{ base: 4, md: 8 }}>
          {events.map((event) => (
            <WrapItem key={event.name}>
              <EventCard
                key={event.name}
                id={event.id}
                name={event.name}
                expected_at={event.expected_at}
                created_at={event.created_at}
                updated_at={event.updated_at}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Auth>
    </>
  );
});
export default Events;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = parseCookies(context);
  const response = await fetch(`http://api:3000/api/v1/user_events`, {
    method: "GET",
    headers: {
      "access-token": cookie._access_token,
      client: cookie._client,
      uid: cookie._uid,
    },
  });
  const events = await response.json();

  return {
    props: {
      events,
    },
  };
};
