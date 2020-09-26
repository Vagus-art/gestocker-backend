import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ExpenseCategories } from "./ExpenseCategories";

@Index("expense_category", ["category_id"], {})
@Entity("expenses", { schema: "chakra_stock" })
export class Expenses {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
  
  @Column("varchar", { name: "description", nullable: true, length: 30 })
  description: string | null;

  @Column("float", { name: "sum", precision: 12 })
  sum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "expense_id" })
  expense_id: number;

  @Column("int", { name: "category_id" })
  category_id: number;

  @ManyToOne(
    () => ExpenseCategories,
    (expenseCategories) => expenseCategories.expenses,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "category_id" }])
  category: ExpenseCategories;
}
