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

@Index("history_product", ["productId"], {})
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
  sellPrice: number;

  @Column("float", { name: "buy_price", precision: 12 })
  buyPrice: number;

  @Column("int", { name: "product_id", nullable: true })
  productId: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "product_history_id" })
  productHistoryId: number;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

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
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products;
}
