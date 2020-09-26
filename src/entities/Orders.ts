import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Contacts } from './Contacts';
import { OrderProducts } from './OrderProducts';
import { Transactions } from './Transactions';

@Index('orders_contacts', ['contact_id'], {})
@Entity('orders', { schema: 'chakra_stock' })
export class Orders {
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date | null;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  @PrimaryGeneratedColumn({ type: 'int', name: 'order_id' })
  order_id: number;

  @Column('tinyint', { name: 'completed', width: 1, default: () => "'0'" })
  completed: boolean;

  @Column('tinyint', { name: 'delivered', width: 1, default: () => "'0'" })
  delivered: boolean;

  @Column('char', { name: 'type', length: 1 })
  type: string;

  @Column('int', { name: 'contact_id' })
  contact_id: number;

  @ManyToOne(
    () => Contacts,
    contacts => contacts.orders,
    {
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
      eager: true,
    },
  )
  @JoinColumn([{ name: 'contact_id', referencedColumnName: 'contact_id' }])
  contact: Contacts;

  @OneToMany(
    () => OrderProducts,
    order_products => order_products.order
  )
  order_products: OrderProducts[];

  @OneToMany(
    () => Transactions,
    transactions => transactions.order
  )
  transactions: Transactions[];
}
