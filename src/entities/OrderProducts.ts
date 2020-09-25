import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";
import { ProductHistory } from "./ProductHistory";

@Index("order_product_history", ["productHistoryId"], {})
@Index("order_product", ["productId"], {})
@Entity("order_products", { schema: "chakra_stock" })
export class OrderProducts {
  @Column("int", { name: "ammount" })
  ammount: number;

  @Column("int", { name: "delivered" })
  delivered: number;

  @Column("int", { primary: true, name: "order_id" })
  orderId: number;

  @Column("int", { primary: true, name: "product_id" })
  productId: number;

  @Column("int", { primary: true, name: "product_history_id" })
  productHistoryId: number;

  @ManyToOne(() => Orders, (orders) => orders.orderProducts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products;

  @ManyToOne(
    () => ProductHistory,
    (productHistory) => productHistory.orderProducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "product_history_id", referencedColumnName: "productHistoryId" },
  ])
  productHistory: ProductHistory;
}
