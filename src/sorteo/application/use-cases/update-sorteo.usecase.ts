import { Sorteo, SorteoRepository } from '@/sorteo/domain';

export class UpdateSorteoUseCase {
  constructor(private sorteoRepository: SorteoRepository) {}

  async execute(id: string, partialSorteo: Partial<Sorteo>): Promise<Sorteo> {
    return this.sorteoRepository.update(id, partialSorteo);
  }
}
