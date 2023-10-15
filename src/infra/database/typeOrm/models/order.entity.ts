import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProductModel } from './order-product.entity';
import { OrderStatusEnum } from '../../../../orders/entities/order-status.enum';

@Entity('tb_order')
export class OrderModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;

  @Column()
  moment: Date;

  @Column()
  status: OrderStatusEnum;

  @OneToMany(() => OrderProductModel, (order_product) => order_product.order)
  order_products?: OrderProductModel[];
}
