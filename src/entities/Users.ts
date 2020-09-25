import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email"], { unique: true })
@Entity("users", { schema: "chakra_stock" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("varchar", { name: "password", length: 60 })
  password: string;

  @Column("varchar", { name: "email", unique: true, length: 60 })
  email: string;

  @Column("char", { name: "name", length: 60 })
  name: string;
}
