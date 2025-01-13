import { Category, CategoryRepository } from '@/category/domain';

export class GetAllCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
