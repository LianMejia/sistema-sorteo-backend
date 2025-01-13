import { Category } from '../entity';

export interface CategoryRepository {
  getAll(): Promise<Category[]>;
  getOne(id: string): Promise<Category>;
  create(category: Category): Promise<Category>;
  update(id: string, partialCategory: Partial<Category>): Promise<Category>;
  delete(id: string): Promise<Category>;
}
