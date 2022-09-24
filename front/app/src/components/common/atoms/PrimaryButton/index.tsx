import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
};

export const PrimaryButton: FC<Props> = ({
  children,
  onClick,
  disabled = false,
}) => {
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
