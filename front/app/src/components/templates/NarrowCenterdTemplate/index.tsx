import React, { FC, ReactNode } from "react";

import { Flex } from "@chakra-ui/react";

/* component */
import { BaseTemplate } from "../BaseTemplate";

/**
 * props
 */
type Props = {
  children: ReactNode;
};

/**
 * NarrowCenterdTemplate
 * @param {Props} props
 * @returns
 */
export const NarrowCenterdTemplate: FC<Props> = (props: Props) => {
  /* props */
  const { children } = props;

  return (
    <>
      <BaseTemplate>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Flex>
      </BaseTemplate>
    </>
  );
};
