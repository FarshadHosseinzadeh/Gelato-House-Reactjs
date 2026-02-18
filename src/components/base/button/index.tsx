import type { JSX } from "react";
import { clx } from "src/utilities/clx";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyles = "rounded-xl";

const colors = {
  primary: "bg-primary-500 text-primary-500",
  secondary: "bg-secondary-500 text-secondary-500",
};

const sizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3text-large",
};

const variants = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500",
    secondary: "text-secondary-500 border border-secondary-500",
  },
  text: {
    primary: "text-gray-950",
    secondary: "bg-secondary-500 text-secondary-500",
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "secondary",
  size = "large",
  ...props
}): JSX.Element => {
  return (
    <button
      className={clx(
        buttonBaseStyles,
        variants[variant][color],
        colors[color],
        sizes[size],
        "text-white!",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

//component composition example

//write a component
//reusable
//configurable
//accessible
//themable
//responsive
//maintable
//scalable
