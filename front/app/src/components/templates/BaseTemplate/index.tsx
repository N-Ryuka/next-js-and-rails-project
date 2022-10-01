import React, { FC, ReactNode } from "react";

import { Container } from "@chakra-ui/react";

/* component */
import { Header } from "../../molecules/Header";

/**
 * props
 */
type Props = {
  children: ReactNode;
};

/**
 * BaseTemplate
 * @param {Props} props
 * @returns
 */
export const BaseTemplate: FC<Props> = (props: Props) => {
  /* props */
  const { children } = props;

  return (
    <>
      <Header />
      <Container maxW="4xl" padding="4" centerContent>
        {children}
      </Container>
    </>
  );
};
