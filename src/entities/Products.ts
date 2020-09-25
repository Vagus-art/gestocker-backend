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
import { ProductCategories } from "./ProductCategories";
import { ProductHistory } from "./ProductHistory";

@Index("product_history_id", ["product_history_id"], { unique: true })
@Index("products_categories", ["category_id"], {})
@Entity("products", { schema: "chakra_stock" })
export class Products {
  @Column("int", { name: "stock" })
  stock: number;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deleted_at: Date | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @PrimaryGeneratedColumn({ type: "int", name: "product_id" })
  product_id: number;

  @Column("int", { primary: true, name: "product_history_id" })
  product_history_id: number;

  @Column("int", { name: "category_id" })
  category_id: number;

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.product)
  orderProducts: OrderProducts[];

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.products,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "category_id" }])
  category: ProductCategories;

  @OneToOne(() => ProductHistory, (productHistory) => productHistory.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "product_history_id", referencedColumnName: "product_history_id" },
  ])
  productHistory2: ProductHistory;

  @OneToMany(() => ProductHistory, (productHistory) => productHistory.product)
  productHistories: ProductHistory[];
}
