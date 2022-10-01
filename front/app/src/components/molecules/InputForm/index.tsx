import { FC } from "react";

import {
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";

/**
 * props
 */
type Props = {
  placeholder: string;
  type: string;
  icon: JSX.Element;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * InputForm
 * @param {Props} props
 * @returns
 */
export const InputForm: FC<Props> = (props: Props) => {
  /* props */
  const { icon, value, setValue, type, placeholder } = props;

  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          children={icon}
        />
        <Input
          type={type}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </InputGroup>
    </FormControl>
  );
};
