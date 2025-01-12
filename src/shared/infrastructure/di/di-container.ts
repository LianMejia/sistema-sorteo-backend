import {
  CreateCityUseCase,
  DeleteCityUseCase,
  GetAllCitiesUseCase,
  GetOneCityUseCase,
  UpdateCityUseCase,
} from '@/city/Application';
import { CityController } from '@/city/infrastructure/controller';
import { CityRepositoryImpl } from '@/city/infrastructure/repository';
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

// City

container.register('cityRepository', asClass(CityRepositoryImpl).singleton());

container.register(
  'getAllCitiesUseCase',
  asClass(GetAllCitiesUseCase).singleton()
);

container.register('getOneCityUseCase', asClass(GetOneCityUseCase).singleton());

container.register('createCityUseCase', asClass(CreateCityUseCase).singleton());

container.register('updateCityUseCase', asClass(UpdateCityUseCase).singleton());

container.register('deleteCityUseCase', asClass(DeleteCityUseCase).singleton());

container.register('cityController', asClass(CityController).singleton());

export const diContainer = container;
