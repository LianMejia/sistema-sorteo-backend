import { Country } from '../entity';

export interface CountryRepository {
  getAll(): Promise<Country[]>;
  getOne(id: string): Promise<Country>;
  create(country: Country): Promise<Country>;
  update(id: string, partialCountry: Partial<Country>): Promise<Country>;
  delete(id: string): Promise<Country>;
}
