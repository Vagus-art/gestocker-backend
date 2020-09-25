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

@Index("contact_id", ["contactId"], {})
@Index("order_id", ["orderId"], {})
@Entity("transactions", { schema: "chakra_stock" })
export class Transactions {
  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("float", { name: "sum", precision: 12 })
  sum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "transaction_id" })
  transactionId: number;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("int", { name: "contact_id" })
  contactId: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @ManyToOne(() => Contacts, (contacts) => contacts.transactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "contact_id", referencedColumnName: "contactId" }])
  contact: Contacts;

  @ManyToOne(() => Orders, (orders) => orders.transactions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Orders;
}
