import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProductModel } from './order-product.entity';

@Entity('product')
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  description: string;

  @Column()
  image_uri: string;

  @OneToMany(() => OrderProductModel, (order_product) => order_product.product)
  order_products?: OrderProductModel[];
}
