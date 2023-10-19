import Image from "next/image";
import OrdersKanban from "@/components/kitchen/OrdersKanban";
import css from "./page.module.css";

export default function Kitchen() {
  return (
    <section>
      <Image
        src="/img/kitchen-bg.jpeg"
        alt="Wormwood leaves and purple flower"
        className={css.backgroundImage}
        height={400}
        width={400}
      />
      <h1 className={css.title}>Order UP!</h1>
      <OrdersKanban />
    </section>
  );
}
