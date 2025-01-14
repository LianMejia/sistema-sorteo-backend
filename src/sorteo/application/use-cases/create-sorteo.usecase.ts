import { Sorteo, SorteoRepository } from '@/sorteo/domain';

export class CreateSorteoUseCase {
  constructor(private sorteoRepository: SorteoRepository) {}

  async execute(sorteo: Sorteo): Promise<Sorteo> {
    return this.sorteoRepository.create(sorteo);
  }
}
