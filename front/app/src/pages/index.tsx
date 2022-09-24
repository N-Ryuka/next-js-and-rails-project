import React, { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";

import { Auth } from "../components/auth";
import { useAuth } from "../contexts/AuthContext";
import { EventCard } from "../components/common/organisms/EventCard";
import { getEvents } from "../lib/api/event";
import { Event } from "../interfaces";

interface Props {
  events: Array<Event>;
}

const Home: FC = memo((props: Props) => {
  const { events } = props;
  const { setIsSignedIn, isSignedIn } = useAuth();

  return (
    <>
      <Auth>
        <h1>Logged in sucessfully</h1>
        {isSignedIn ? <h1>ログイン中</h1> : <h1>ログアウト中</h1>}
        <Wrap p={{ base: 4, md: 8 }}>
          {events.map((event) => (
            <WrapItem key={event.name}>
              <Link href={{ pathname: `events/${event.id}` }}>
                <a>
                  <EventCard
                    key={event.name}
                    id={event.id}
                    name={event.name}
                    expected_at={event.expected_at}
                    created_at={event.created_at}
                    updated_at={event.updated_at}
                  />
                </a>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Auth>
    </>
  );
});
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://api:3000/api/v1/events", {
    method: "GET",
  });
  const events = await response.json();

  return {
    props: {
      events,
    },
  };
};
