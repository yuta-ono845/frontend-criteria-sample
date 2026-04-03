import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
