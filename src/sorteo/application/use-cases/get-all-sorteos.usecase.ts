import { Sorteo, SorteoRepository } from '@/sorteo/domain';

export class GetAllSorteosUseCase {
  constructor(private sorteoRepository: SorteoRepository) {}

  async execute(): Promise<Sorteo[]> {
    return this.sorteoRepository.getAll();
  }
}
