import React, { FC, ReactNode } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

import { Event } from "../../../../interfaces";

export const EventCard: FC<Event> = ({ name, expected_at }) => {
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
