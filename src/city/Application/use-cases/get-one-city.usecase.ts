import { City, CityRepository } from '@/city/Domain';

export class GetOneCityUseCase {
  constructor(private cityRepository: CityRepository) {}

  async execute(id: string): Promise<City> {
    return this.cityRepository.getOne(id);
  }
}
