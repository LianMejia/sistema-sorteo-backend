import {
  CountryController,
  CountryRepositoryImpl,
  CreateCountryUseCase,
  GetOneCountryUseCase,
  GetAllCountriesUseCase,
  UpdateCountryUseCase,
  DeleteCountryUseCase,
} from '@/country';
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
  CreateUserUseCase,
  GetAllUsersUseCase,
  GetOneUserUseCase,
  UpdateUserUseCase,
} from '@/user/application';
import { UserController } from '@/user/infrastructure/controller/user.controller';
import { UserRepositoryImpl } from '@/user/infrastructure/repository/user.repository.impl';

import { InjectionMode, asClass, createContainer } from 'awilix';
import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  GetAllCategoriesUseCase,
  GetOneCategoryUseCase,
  UpdateCategoryUseCase,
} from '@/category/application';

import {
  CategoryController,
} from '@/category/infrastructure/controller';

import {
  CategoryRepositoryImpl
} from '@/category/infrastructure/repository';

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

// User

container.register('userRepository', asClass(UserRepositoryImpl).singleton());

container.register(
  'getAllUsersUseCase',
  asClass(GetAllUsersUseCase).singleton()
);

container.register('getOneUserUseCase', asClass(GetOneUserUseCase).singleton());

container.register('createUserUseCase', asClass(CreateUserUseCase).singleton());

container.register('updateUserUseCase', asClass(UpdateUserUseCase).singleton());

container.register('userController', asClass(UserController).singleton());

// Category

container.register(
  'categoryRepository',
  asClass(CategoryRepositoryImpl).singleton()
);

container.register(
  'getAllCategoriesUseCase',
  asClass(GetAllCategoriesUseCase).singleton()
);

container.register(
  'getOneCategoryUseCase',
  asClass(GetOneCategoryUseCase).singleton()
);

container.register(
  'createCategoryUseCase',
  asClass(CreateCategoryUseCase).singleton()
);

container.register(
  'updateCategoryUseCase',
  asClass(UpdateCategoryUseCase).singleton()
);

container.register(
  'deleteCategoryUseCase',
  asClass(DeleteCategoryUseCase).singleton()
);

container.register(
  'categoryController',
  asClass(CategoryController).singleton()
);

export const diContainer = container;
