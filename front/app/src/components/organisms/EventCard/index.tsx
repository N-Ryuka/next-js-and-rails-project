import React, { FC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

/* types */
import { Event } from "../../../interfaces";

/**
 * EventCard
 * @param {Props} props
 * @returns
 */
export const EventCard: FC<Event> = (props: Event) => {
  /* props */
  const { name, expected_at } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      overflow="hidden"
      p="2"
      _hover={{ cursor: "pointer", opacity: 0.7 }}
      suppressHydrationWarning={true}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src="https://source.unsplash.com/random"
          alt={name}
          m="auto"
          objectFit="cover"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {expected_at.toString()}
        </Text>
      </Stack>
    </Box>
  );
};
