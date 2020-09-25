import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "./Products";

@Entity("product_categories", { schema: "chakra_stock" })
export class ProductCategories {
  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @PrimaryGeneratedColumn({ type: "int", name: "category_id" })
  categoryId: number;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
