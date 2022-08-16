import React from "react";

import { AuthProvider } from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

export const RootContextProvider: React.FC<Props> = ({ children }: Props) => (
  <AuthProvider>{children}</AuthProvider>
);
