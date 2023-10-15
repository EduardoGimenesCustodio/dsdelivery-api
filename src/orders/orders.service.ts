import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderModel } from 'src/infra/database/typeOrm/models/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderStatusEnum } from './entities/order-status.enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderModel)
    private orderRepository: Repository<OrderModel>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderModel> {
    try {
      return await this.orderRepository.save({
        ...createOrderDto,
        status: OrderStatusEnum.PENDING,
        moment: new Date(),
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(): Promise<OrderEntity[]> {
    try {
      return await this.orderRepository.find();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(id: number): Promise<OrderEntity> {
    try {
      return await this.orderRepository.findOneBy({ id });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<void> {
    try {
      await this.orderRepository.update(id, updateOrderDto);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.orderRepository.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
