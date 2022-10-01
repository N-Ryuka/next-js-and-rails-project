import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

import { Wrap, WrapItem } from "@chakra-ui/react";

/* types */
import { Event } from "../../interfaces";
/* compenents */
import { LoginRequired } from "../../components/auth";
import { EventCard } from "../../components/organisms/EventCard";
import { BaseTemplate } from "../../components/templates/BaseTemplate";

/* props */
interface Props {
  events: Array<Event>;
}

/**
 * Events
 * @param props Props
 * @returns
 */
const Events: NextPage<Props> = (props: Props) => {
  /* hooks */
  const { events } = props;

  return (
    <>
      <LoginRequired>
        <BaseTemplate>
          <h1>参加するイベント</h1>
          <Wrap p={{ base: 4, md: 8 }}>
            {events.map((event: Event) => (
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
        </BaseTemplate>
      </LoginRequired>
    </>
  );
};
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
