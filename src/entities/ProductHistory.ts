import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderProducts } from "./OrderProducts";
import { Products } from "./Products";

@Index("history_product", ["product_id"], {})
@Entity("product_history", { schema: "chakra_stock" })
export class ProductHistory {
  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("float", { name: "sell_price", precision: 12 })
  sell_price: number;

  @Column("float", { name: "buy_price", precision: 12 })
  buy_price: number;

  @Column("int", { name: "product_id", nullable: true })
  product_id: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "product_history_id" })
  product_history_id: number;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deleted_at: Date | null;

  @OneToMany(
    () => OrderProducts,
    (orderProducts) => orderProducts.productHistory
  )
  orderProducts: OrderProducts[];

  @OneToOne(() => Products, (products) => products.productHistory2)
  products: Products;

  @ManyToOne(() => Products, (products) => products.productHistories, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "product_id" }])
  product: Products;
}
