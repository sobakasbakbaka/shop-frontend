import clsx from "clsx";
import { ReactNode } from "react";

type BoxProps = {
  className?: string;
  children: ReactNode;
};

export const Box = ({ className, children }: BoxProps) => {
  return (
    <div
      className={clsx(
        className,
        "min-w-80 h-fit p-4 flex flex-col gap-2 bg-slate-100 rounded-2xl"
      )}
    >
      {children}
    </div>
  );
};
