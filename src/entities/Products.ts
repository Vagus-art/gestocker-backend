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

@Index("product_history_id", ["productHistoryId"], { unique: true })
@Index("products_categories", ["categoryId"], {})
@Entity("products", { schema: "chakra_stock" })
export class Products {
  @Column("int", { name: "stock" })
  stock: number;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @PrimaryGeneratedColumn({ type: "int", name: "product_id" })
  productId: number;

  @Column("int", { primary: true, name: "product_history_id" })
  productHistoryId: number;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.product)
  orderProducts: OrderProducts[];

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.products,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: ProductCategories;

  @OneToOne(() => ProductHistory, (productHistory) => productHistory.products, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "product_history_id", referencedColumnName: "productHistoryId" },
  ])
  productHistory2: ProductHistory;

  @OneToMany(() => ProductHistory, (productHistory) => productHistory.product)
  productHistories: ProductHistory[];
}
