import { ProductEntity } from 'src/products/entities/product.entity';
import { OrderEntity } from '../entities/order.entity';

export class CreateOrderDto
  implements Omit<OrderEntity, 'id' | 'moment' | 'status'>
{
  address: string;
  latitude: number;
  longitude: number;
  products?: ProductEntity[];
}
