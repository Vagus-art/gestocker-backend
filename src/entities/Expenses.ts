import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ExpenseCategories } from "./ExpenseCategories";

@Index("expense_category", ["categoryId"], {})
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
  createdAt: Date;

  @PrimaryGeneratedColumn({ type: "int", name: "expense_id" })
  expenseId: number;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => ExpenseCategories,
    (expenseCategories) => expenseCategories.expenses,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: ExpenseCategories;
}
