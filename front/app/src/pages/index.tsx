import React from "react";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { Wrap, WrapItem } from "@chakra-ui/react";

/* types */
import { Event } from "../interfaces";
/* components */
import { LoginRequired } from "../components/auth";
import { EventCard } from "../components/organisms/EventCard";
import { BaseTemplate } from "../components/templates/BaseTemplate";

/**
 * Props
 */
interface Props {
  events: Array<Event>;
}

/**
 * Home
 * @param props Props
 * @returns
 */
const Home: NextPage<Props> = (props: Props) => {
  /* props */
  const { events } = props;

  return (
    <>
      <LoginRequired>
        <BaseTemplate>
          <Wrap p={{ base: 4, md: 8 }}>
            {events.map((event: Event) => (
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
        </BaseTemplate>
      </LoginRequired>
    </>
  );
};
export default Home;

/**
 * getStaticProps
 * @returns
 */
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
