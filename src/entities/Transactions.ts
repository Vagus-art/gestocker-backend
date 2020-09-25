import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from "./Contacts";
import { Orders } from "./Orders";

@Index("contact_id", ["contact_id"], {})
@Index("order_id", ["order_id"], {})
@Entity("transactions", { schema: "chakra_stock" })
export class Transactions {
  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @Column("float", { name: "sum", precision: 12 })
  sum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "transaction_id" })
  transaction_id: number;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deleted_at: Date | null;

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
