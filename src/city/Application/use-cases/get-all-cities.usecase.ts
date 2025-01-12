import { City, CityRepository } from '@/city/Domain';

export class GetAllCitiesUseCase {
  constructor(private cityRepository: CityRepository) {}

  async execute(): Promise<City[]> {
    return this.cityRepository.getAll();
  }
}
