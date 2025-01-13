import { Category, CategoryRepository } from '@/category/domain';

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<Category> {
    return this.categoryRepository.delete(id);
  }
}
