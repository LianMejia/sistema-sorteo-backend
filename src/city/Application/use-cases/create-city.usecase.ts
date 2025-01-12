import { City, CityRepository } from '@/city/Domain';

export class CreateCityUseCase {
  constructor(private cityRepository: CityRepository) {}

  async execute(city: City): Promise<City> {
    return this.cityRepository.create(city);
  }
}
