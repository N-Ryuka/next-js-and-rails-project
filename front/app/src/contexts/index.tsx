import { FC } from "react";

/* contexts */
import { AuthProvider } from "./AuthContext";

/**
 * props
 */
type Props = {
  children: JSX.Element;
};

/**
 * RootContextProvider
 * @param props Props
 * @returns
 */
export const RootContextProvider: FC<Props> = ({ children }: Props) => (
  <AuthProvider>{children}</AuthProvider>
);
