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
import { ProductCategories } from "./ProductCategories";
import { ProductHistory } from "./ProductHistory";

@Index("product_history_id", ["product_history_id"], { unique: true })
@Index("products_categories", ["category_id"], {})
@Entity("products", { schema: "chakra_stock" })
export class Products {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
  
  @Column("int", { name: "stock" })
  stock: number;

  @PrimaryGeneratedColumn({ type: "int", name: "product_id" })
  product_id: number;

  @Column("int", { primary: true, name: "product_history_id" })
  product_history_id: number;

  @Column("int", { name: "category_id" })
  category_id: number;

  @OneToMany(() => OrderProducts, (order_products) => order_products.product)
  order_products: OrderProducts[];

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
    eager: true
  })
  @JoinColumn([
    { name: "product_history_id", referencedColumnName: "product_history_id" },
  ])
  productHistory2: ProductHistory;

  @OneToMany(() => ProductHistory, (productHistory) => productHistory.product)
  productHistories: ProductHistory[];
}
