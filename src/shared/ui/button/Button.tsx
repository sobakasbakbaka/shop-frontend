import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "outline" | "filled" | "transparent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  filled: "text-white bg-black",
  outline: "text-black border border-black/10",
  transparent: "",
};

export const Button = (props: ButtonProps) => {
  const { children, variant = "filled", className } = props;

  return (
    <button
      className={clsx(
        variantClasses[variant],
        className,
        (variant === "outline" || variant === "filled") &&
          "py-4 px-16 text-base rounded-full"
      )}
    >
      {children}
    </button>
  );
};
