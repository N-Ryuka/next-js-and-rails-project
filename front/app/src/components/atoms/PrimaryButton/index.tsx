import { FC, ReactNode } from "react";

import { Button } from "@chakra-ui/react";

/**
 * Props
 */
type Props = {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
};

/**
 * PrimaryButton
 * @param {Props} props
 * @returns
 */
export const PrimaryButton: FC<Props> = (props: Props) => {
  /* props */
  const { children, onClick, disabled = false } = props;

  return (
    <Button
      borderRadius={0}
      type="submit"
      variant="solid"
      colorScheme="teal"
      width="full"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
