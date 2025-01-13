import { Category, CategoryRepository } from '@/category/domain';

export class GetOneCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<Category> {
    return this.categoryRepository.getOne(id);
  }
}
