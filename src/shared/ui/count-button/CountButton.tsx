import { Button } from "../button";

type CountButtonProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const CountButton = ({
  count,
  increment,
  decrement,
}: CountButtonProps) => {
  return (
    <div className={"flex items-center"}>
      <Button className={"px-4"} onClick={decrement}>
        <p className={"text-1xl font-bold"}>-</p>
      </Button>
      <Button className={"px-4"} variant={"transparent"} disabled>
        <p className={"text-1xl font-bold"}>{count}</p>
      </Button>
      <Button className={"px-4"} onClick={increment}>
        <p className={"text-1xl font-bold"}>+</p>
      </Button>
    </div>
  );
};
