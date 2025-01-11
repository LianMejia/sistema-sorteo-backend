import { Country, CountryRepository } from '@/country/domain';

export class GetAllCountriesUseCase {
  constructor(private countryRepository: CountryRepository) {}

  async execute(): Promise<Country[]> {
    return this.countryRepository.getAll();
  }
}
