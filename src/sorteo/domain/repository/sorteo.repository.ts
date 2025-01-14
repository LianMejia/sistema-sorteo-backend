import { Sorteo } from '../entity';

export interface SorteoRepository {
  getAll(): Promise<Sorteo[]>;
  getOne(id: string): Promise<Sorteo>;
  create(sorteo: Sorteo): Promise<Sorteo>;
  update(id: string, partialSorteo: Partial<Sorteo>): Promise<Sorteo>;
  delete(id: string): Promise<Sorteo>;
}
