import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModel } from 'src/infra/database/typeOrm/models/order.entity';
import { OrderProductsModule } from 'src/order-products/order-products.module';
import { OrderProductsService } from 'src/order-products/order-products.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderModel]), OrderProductsModule],
  exports: [TypeOrmModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrderProductsService],
})
export class OrdersModule {}
