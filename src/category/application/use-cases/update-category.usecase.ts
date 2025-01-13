import { Category, CategoryRepository } from '@/category/domain';

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(
    id: string,
    partialCategory: Partial<Category>
  ): Promise<Category> {
    return this.categoryRepository.update(id, partialCategory);
  }
}
