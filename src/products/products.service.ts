import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductModel } from 'src/infra/database/typeOrm/models/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductModel)
    private productRepository: Repository<ProductModel>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<void> {
    try {
      await this.productRepository.save(createProductDto);
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    try {
      return (await this.productRepository.find()).map((product) => {
        return { ...product, imageUri: product.image_uri };
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(id: number): Promise<ProductEntity> {
    try {
      const product = await this.productRepository.findOneBy({ id });

      return { ...product, imageUri: product.image_uri };
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<void> {
    try {
      await this.productRepository.update(id, updateProductDto);
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.productRepository.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
