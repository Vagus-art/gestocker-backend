import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";
import { ProductHistory } from "./ProductHistory";

@Index("order_product_history", ["product_history_id"], {})
@Index("order_product", ["product_id"], {})
@Entity("order_products", { schema: "chakra_stock" })
export class OrderProducts {
  @Column("int", { name: "ammount" })
  ammount: number;

  @Column("int", { name: "delivered" })
  delivered: number;

  @Column("int", { primary: true, name: "order_id" })
  order_id: number;

  @Column("int", { primary: true, name: "product_id" })
  product_id: number;

  @Column("int", { primary: true, name: "product_history_id" })
  product_history_id: number;

  @ManyToOne(() => Orders, (orders) => orders.orderProducts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "order_id" }])
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "product_id" }])
  product: Products;

  @ManyToOne(
    () => ProductHistory,
    (productHistory) => productHistory.orderProducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "product_history_id", referencedColumnName: "product_history_id" },
  ])
  productHistory: ProductHistory;
}
