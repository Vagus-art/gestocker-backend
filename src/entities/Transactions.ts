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
import { Contacts } from "./Contacts";
import { Orders } from "./Orders";

@Index("contact_id", ["contact_id"], {})
@Index("order_id", ["order_id"], {})
@Entity("transactions", { schema: "chakra_stock" })
export class Transactions {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  @Column("float", { name: "sum", precision: 12 })
  sum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "transaction_id" })
  transaction_id: number;

  @Column("int", { name: "contact_id" })
  contact_id: number;

  @Column("int", { name: "order_id" })
  order_id: number;

  @ManyToOne(() => Contacts, (contacts) => contacts.transactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "contact_id", referencedColumnName: "contact_id" }])
  contact: Contacts;

  @ManyToOne(() => Orders, (orders) => orders.transactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "order_id" }])
  order: Orders;
}
