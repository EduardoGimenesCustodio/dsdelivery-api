import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModel } from 'src/infra/database/typeOrm/models/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderModel])],
  exports: [TypeOrmModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
