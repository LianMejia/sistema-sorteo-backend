import {
  CountryController,
  CountryRepositoryImpl,
  CreateCountryUseCase,
  GetOneCountryUseCase,
  GetAllCountriesUseCase,
  UpdateCountryUseCase,
  DeleteCountryUseCase,
} from '@/country';
import { InjectionMode, asClass, createContainer } from 'awilix';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

// country

container.register(
  'countryRepository',
  asClass(CountryRepositoryImpl).singleton()
);

container.register(
  'getAllCountriesUseCase',
  asClass(GetAllCountriesUseCase).singleton()
);
container.register(
  'createCountryUseCase',
  asClass(CreateCountryUseCase).singleton()
);
container.register(
  'getOneCountryUseCase',
  asClass(GetOneCountryUseCase).singleton()
);
container.register(
  'updateCountryUseCase',
  asClass(UpdateCountryUseCase).singleton()
);
container.register(
  'deleteCountryUseCase',
  asClass(DeleteCountryUseCase).singleton()
);
container.register('CountryController', asClass(CountryController).singleton());

export const diContainer = container;
