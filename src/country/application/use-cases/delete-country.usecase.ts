import { Country, CountryRepository } from '@/country/domain';

export class DeleteCountryUseCase {
  constructor(private countryRepository: CountryRepository) {}

  async execute(id: string): Promise<Country> {
    return this.countryRepository.delete(id);
  }
}
