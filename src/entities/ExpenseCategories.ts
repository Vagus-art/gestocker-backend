import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expenses } from "./Expenses";

@Entity("expense_categories", { schema: "chakra_stock" })
export class ExpenseCategories {
  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @PrimaryGeneratedColumn({ type: "int", name: "category_id" })
  category_id: number;

  @OneToMany(() => Expenses, (expenses) => expenses.category)
  expenses: Expenses[];
}
