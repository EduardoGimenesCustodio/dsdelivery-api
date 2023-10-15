import { ProductEntity } from '../entities/product.entity';

export class CreateProductDto implements Omit<ProductEntity, 'id'> {
  name: string;
  price: number;
  description: string;
  imageUri: string;
}
