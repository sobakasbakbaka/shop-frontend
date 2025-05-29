import Image from "next/image";
import Link from "next/link";
import { Order } from "../model/types";

type OrderItemProps = {
  item: Order;
};

export const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <div className={"flex flex-col gap-2 mt-2"}>
      <p className={"text-1xl font-bold mb-4"}>
        Заказ от {item.created_at} на $ {item.total}
      </p>
      <div className="flex items-center gap-4 border-b pb-4">
        {item.items.map(({ product, quantity }) => (
          <div key={product.id}>
            <Image
              src={product.image_url}
              alt={product.name}
              width={80}
              height={120}
              className={"rounded-lg w-20 h-32"}
            />
            <div className="flex-1">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-bold line-clamp-1">{product.name}</h3>
              </Link>
              <p>
                $ {product.price} × {quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
