import { Country, CountryRepository } from '@/country/domain';

export class UpdateCountryUseCase {
  constructor(private countryRepository: CountryRepository) {}

  async execute(id: string, partial: Partial<Country>): Promise<Country> {
    return this.countryRepository.update(id, partial);
  }
}
