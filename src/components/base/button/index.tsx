import type { JSX } from "react";
import { clx } from "src/utilities/clx";

type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseStyles = "rounded-full outline-none";

const variants = {
  contained: {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    sizes: {
      small: "px-3 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-7 py-3 text-lg",
    },
  },
  outlined: {
    primary: "text-primary-500 border border-primary-500",
    secondary: "text-secondary-500 border border-secondary-500",
    sizes: {
      small: "px-2 py-1 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-900",
    sizes: {
      small: "p-1 py-1 text-sm",
      medium: "p-2 py-2 text-base",
      large: "p-3 py-3 text-lg",
    },
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  color = "secondary",
  size = "medium",
  ...props
}): JSX.Element => {
  return (
    <button
      className={clx(
        buttonBaseStyles,
        variants[variant][color],
        variants[variant]["sizes"][size],
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
