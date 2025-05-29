import { MouseEvent } from "react";
import { Button } from "../button";

type CountButtonProps = {
  count: number;
  minValue?: number;
  maxValue: number;
  increment: (event: MouseEvent<HTMLButtonElement>) => void;
  decrement: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const CountButton = ({
  count,
  increment,
  decrement,
  minValue = 1,
  maxValue,
}: CountButtonProps) => {
  return (
    <div className={"flex items-center"}>
      <Button
        className={"px-4"}
        onClick={decrement}
        disabled={minValue === count}
      >
        <p className={"text-1xl font-bold"}>-</p>
      </Button>
      <Button className={"px-4"} variant={"transparent"} disabled>
        <p className={"text-1xl font-bold"}>{count}</p>
      </Button>
      <Button
        className={"px-4"}
        onClick={increment}
        disabled={maxValue === count}
      >
        <p className={"text-1xl font-bold"}>+</p>
      </Button>
    </div>
  );
};
