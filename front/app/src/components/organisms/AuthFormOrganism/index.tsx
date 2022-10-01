import React, { FC, ReactNode } from "react";

import { Stack, Box, Avatar, Heading } from "@chakra-ui/react";

/**
 * props
 */
type Props = {
  children: ReactNode;
};

/**
 * AuthFormOrganism
 * @param {Props} props
 * @returns
 */
export const AuthFormOrganism: FC<Props> = (props: Props) => {
  /* props */
  const { children } = props;

  return (
    <>
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            {children}
          </Stack>
        </form>
      </Box>
    </>
  );
};
