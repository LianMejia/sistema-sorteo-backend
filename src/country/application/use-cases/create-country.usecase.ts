import { Country, CountryRepository } from '@/country/domain';

export class CreateCountryUseCase {
  constructor(private countryRepository: CountryRepository) {}

  async execute(country: Country): Promise<Country> {
    return this.countryRepository.create(country);
  }
}
