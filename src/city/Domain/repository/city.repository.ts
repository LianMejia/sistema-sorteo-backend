import { City } from '../entity';

export interface CityRepository {
  getAll(): Promise<City[]>;
  getOne(id: string): Promise<City>;
  create(city: City): Promise<City>;
  update(id: string, partialCity: Partial<City>): Promise<City>;
  delete(id: string): Promise<City>;
}
