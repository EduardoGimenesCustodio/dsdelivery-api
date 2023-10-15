import { OrderStatusEnum } from 'src/orders/entities/order-status.enum';

export class OrderEntity {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
  moment: Date;
  status: OrderStatusEnum;
}
