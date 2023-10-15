import { OrderProductEntity } from '../entities/order-product.entity';

export class CreateOrderProductDto implements Omit<OrderProductEntity, 'id'> {
  orderId: number;
  productId: number;
}
