import React, { FC, ReactNode } from "react";
import { Stack, Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const AuthFormOrganism: FC<Props> = ({ children }) => {
  return (
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
  );
};
