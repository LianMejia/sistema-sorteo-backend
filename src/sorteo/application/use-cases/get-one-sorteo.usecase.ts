import { Sorteo, SorteoRepository } from '@/sorteo/domain';

export class GetOneSorteoUseCase {
  constructor(private sorteoRepository: SorteoRepository) {}

  async execute(id: string): Promise<Sorteo> {
    return this.sorteoRepository.getOne(id);
  }
}
