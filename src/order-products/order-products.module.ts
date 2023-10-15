import { Module } from '@nestjs/common';
import { OrderProductsService } from './order-products.service';
import { OrderProductsController } from './order-products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductModel } from 'src/infra/database/typeOrm/models/order-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProductModel])],
  exports: [TypeOrmModule],
  controllers: [OrderProductsController],
  providers: [OrderProductsService],
})
export class OrderProductsModule {}
