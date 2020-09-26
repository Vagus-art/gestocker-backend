import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Orders } from './Orders';
import { Transactions } from './Transactions';

@Entity('contacts', { schema: 'chakra_stock' })
export class Contacts {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  @Column('varchar', { name: 'address', length: 30 })
  address: string;

  @PrimaryGeneratedColumn({ name: 'contact_id', type: 'int' })
  contact_id: number;

  @Column('float', { name: 'money', precision: 12 })
  money: number;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('char', { name: 'role', length: 1 })
  role: string;

  @Column('varchar', { name: 'phone', length: 30 })
  phone: string;

  @OneToMany(
    () => Orders,
    orders => orders.contact,
  )
  orders: Orders[];

  @OneToMany(
    () => Transactions,
    transactions => transactions.contact,
  )
  transactions: Transactions[];
}
