"use client";

import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: string; // Note: HTML button doesn't support `variant` attribute natively
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, className, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      // Remove this line ↓ because it's not a valid HTML attribute
      // variant={variant}
    >
      {children}
    </button>
  );
};
