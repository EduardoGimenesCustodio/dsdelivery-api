import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { OrderProductModel } from 'src/infra/database/typeOrm/models/order-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProductEntity } from './entities/order-product.entity';

@Injectable()
export class OrderProductsService {
  constructor(
    @InjectRepository(OrderProductModel)
    private orderProductRepository: Repository<OrderProductModel>,
  ) {}

  async create(createOrderProductDto: CreateOrderProductDto): Promise<void> {
    try {
      await this.orderProductRepository.save({
        order_id: createOrderProductDto.orderId,
        product_id: createOrderProductDto.productId,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(): Promise<OrderProductEntity[]> {
    try {
      return (await this.orderProductRepository.find()).map((orderProduct) => {
        return {
          id: orderProduct.id,
          orderId: orderProduct.order_id,
          productId: orderProduct.product_id,
        };
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(id: number): Promise<OrderProductEntity> {
    try {
      const orderProduct = await this.orderProductRepository.findOneBy({ id });

      return {
        id: orderProduct.id,
        orderId: orderProduct.order_id,
        productId: orderProduct.product_id,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(
    id: number,
    updateOrderProductDto: UpdateOrderProductDto,
  ): Promise<void> {
    try {
      await this.orderProductRepository.update(id, {
        order_id: updateOrderProductDto.orderId,
        product_id: updateOrderProductDto.productId,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.orderProductRepository.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
