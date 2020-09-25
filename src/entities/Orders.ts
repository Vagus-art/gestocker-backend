import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from "./Contacts";
import { OrderProducts } from "./OrderProducts";
import { Transactions } from "./Transactions";

@Index("orders_contacts", ["contactId"], {})
@Entity("orders", { schema: "chakra_stock" })
export class Orders {
  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @PrimaryGeneratedColumn({ type: "int", name: "order_id" })
  orderId: number;

  @Column("tinyint", { name: "completed", width: 1, default: () => "'0'" })
  completed: boolean;

  @Column("tinyint", { name: "delivered", width: 1, default: () => "'0'" })
  delivered: boolean;

  @Column("char", { name: "type", length: 1 })
  type: string;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("int", { name: "contact_id" })
  contactId: number;

  @ManyToOne(() => Contacts, (contacts) => contacts.orders, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "contact_id", referencedColumnName: "contactId" }])
  contact: Contacts;

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.order)
  orderProducts: OrderProducts[];

  @OneToMany(() => Transactions, (transactions) => transactions.order)
  transactions: Transactions[];
}
