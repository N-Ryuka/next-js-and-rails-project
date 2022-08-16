import {
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  placeholder: string;
  type: string;
  icon: JSX.Element;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InputForm: FC<Props> = (props) => {
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
