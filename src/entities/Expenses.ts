import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ExpenseCategories } from "./ExpenseCategories";

@Index("expense_category", ["category_id"], {})
@Entity("expenses", { schema: "chakra_stock" })
export class Expenses {
  @Column("varchar", { name: "description", nullable: true, length: 30 })
  description: string | null;

  @Column("float", { name: "sum", precision: 12 })
  sum: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @PrimaryGeneratedColumn({ type: "int", name: "expense_id" })
  expense_id: number;

  @Column("int", { name: "category_id" })
  category_id: number;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deleted_at: Date | null;

  @ManyToOne(
    () => ExpenseCategories,
    (expenseCategories) => expenseCategories.expenses,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "category_id" }])
  category: ExpenseCategories;
}
