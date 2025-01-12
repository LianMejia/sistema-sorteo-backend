import { City, CityRepository } from '@/city/Domain';

export class DeleteCityUseCase {
  constructor(private cityRepository: CityRepository) {}

  async execute(id: string): Promise<City> {
    return this.cityRepository.delete(id);
  }
}
