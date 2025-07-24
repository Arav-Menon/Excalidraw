"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, className, variant }: ButtonProps) => {
  return (
    <button
      className={className}
      //@ts-ignore
      variant={variant}
    >
      {children}
    </button>
  );
};
