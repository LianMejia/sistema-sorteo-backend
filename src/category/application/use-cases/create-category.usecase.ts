import { Category, CategoryRepository } from '@/category/domain';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(category: Category): Promise<Category> {
    return this.categoryRepository.create(category);
  }
}
