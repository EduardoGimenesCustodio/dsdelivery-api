import { OrderModel } from './order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductModel } from './product.entity';

@Entity('order_product')
export class OrderProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @ManyToOne(() => OrderModel, (order) => order.order_products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order?: OrderModel;

  @Column()
  product_id: number;

  @ManyToOne(() => ProductModel, (product) => product.order_products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product?: ProductModel;
}
