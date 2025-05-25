import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "outline" | "filled" | "transparent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  filled: "bg-black text-white",
  outline: "bg-transparent text-black",
  transparent: "",
};

export const Button = (props: ButtonProps) => {
  const { children, variant = "filled", className, disabled, onClick } = props;

  return (
    <button
      className={clsx(
        variantClasses[variant],
        className,
        (variant === "outline" || variant === "filled") && "py-2 rounded"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
