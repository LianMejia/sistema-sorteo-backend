import { Sorteo, SorteoRepository } from '@/sorteo/domain';

export class DeleteSorteoUseCase {
  constructor(private sorteoRepository: SorteoRepository) {}

  async execute(id: string): Promise<Sorteo> {
    return this.sorteoRepository.delete(id);
  }
}
