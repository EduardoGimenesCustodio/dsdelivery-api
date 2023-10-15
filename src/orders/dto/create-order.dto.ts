import { OrderStatusEnum } from '../entities/order-status.enum';
import { OrderEntity } from '../entities/order.entity';

export class CreateOrderDto implements Omit<OrderEntity, 'id'> {
  address: string;
  latitude: number;
  longitude: number;
  moment: Date;
  status: OrderStatusEnum;
}
