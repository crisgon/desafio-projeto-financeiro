"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  appName: string;
}

export const Button = ({
  children,
  className,
  appName,
  backgroundColor,
}: ButtonProps) => {
  return (
    <button
      className={className}
      style={{ background: backgroundColor, padding: "10px" }}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
