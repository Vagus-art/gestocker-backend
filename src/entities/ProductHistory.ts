import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OrderProducts } from "./OrderProducts";
import { Products } from "./Products";

@Index("history_product", ["product_id"], {})
@Entity("product_history", { schema: "chakra_stock" })
export class ProductHistory {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

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

  @OneToMany(
    () => OrderProducts,
    (order_products) => order_products.product_version
  )
  order_products: OrderProducts[];

  @OneToOne(() => Products, (products) => products.productHistory2)
  products: Products;

  @ManyToOne(() => Products, (products) => products.productHistories, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "product_id" }])
  product: Products;
}
