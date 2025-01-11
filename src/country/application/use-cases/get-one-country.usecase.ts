import { Country, CountryRepository } from '@/country/domain';

export class GetOneCountryUseCase {
  constructor(private countryRepository: CountryRepository) {}

  async execute(id: string): Promise<Country> {
    return this.countryRepository.getOne(id);
  }
}
