import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Orders } from "./Orders";
import { Transactions } from "./Transactions";

@Entity("contacts", { schema: "chakra_stock" })
export class Contacts {
  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deleted_at: Date | null;

  @Column("varchar", { name: "address", length: 30 })
  address: string;

  @PrimaryGeneratedColumn({ name: "contact_id", type: "int"  })
  contact_id: number;

  @Column("float", { name: "money", precision: 12 })
  money: number;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("char", { name: "role", length: 1 })
  role: string;

  @Column("varchar", { name: "phone", length: 30 })
  phone: string;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @OneToMany(() => Orders, (orders) => orders.contact)
  orders: Orders[];

  @OneToMany(() => Transactions, (transactions) => transactions.contact)
  transactions: Transactions[];
}
