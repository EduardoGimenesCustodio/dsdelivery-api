import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<void> {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<OrderEntity[]> {
    const orders = await this.ordersService.findAll();
    return orders;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<OrderEntity> {
    const order = await this.ordersService.findOne(+id);
    return order;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<void> {
    return await this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.ordersService.remove(+id);
  }
}
