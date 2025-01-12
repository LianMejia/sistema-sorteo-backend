import { City, CityRepository } from '@/city/Domain';

export class UpdateCityUseCase {
  constructor(private cityRepository: CityRepository) {}

  async execute(id: string, partialCity: Partial<City>): Promise<City> {
    return this.cityRepository.update(id, partialCity);
  }
}
