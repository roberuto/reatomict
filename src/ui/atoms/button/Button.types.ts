import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};
