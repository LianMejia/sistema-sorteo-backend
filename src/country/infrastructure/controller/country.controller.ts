import { NextFunction, Request, Response } from 'express';

import {
  CreateCountryUseCase,
  DeleteCountryUseCase,
  GetAllCountriesUseCase,
  GetOneCountryUseCase,
  UpdateCountryUseCase,
} from '@/country/application';
import { Country } from '@/country/domain';
import { customSuccessData } from '@/shared';
import CustomErrorMessage from '@/shared/helpers/custom-error-message.helpers';

export class CountryController {
  constructor(
    private getAllCountriesUseCase: GetAllCountriesUseCase,
    private createCountryUseCase: CreateCountryUseCase,
    private getOneCountryUseCase: GetOneCountryUseCase,
    private updateCountryUseCase: UpdateCountryUseCase,
    private deleteCountryUseCase: DeleteCountryUseCase
  ) {}
  async getAll(res: Response, next: NextFunction): Promise<void> {
    try {
      const countries = await this.getAllCountriesUseCase.execute();
      customSuccessData(res, 200, 'Paises obtenidos exitosamente', countries);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener los paises',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const country = await this.getOneCountryUseCase.execute(req.params.id);
      customSuccessData(res, 200, 'Pais obtenido exitosamente', country);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener el pais',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, is_active = false, country_code, phone_code } = req.body;

    const country = new Country({
      name: name,
      is_active: is_active,
      country_code: country_code,
      phone_code: phone_code,
    });

    try {
      const createdCountry = await this.createCountryUseCase.execute(country);
      customSuccessData(res, 201, 'Pais creado exitosamente', createdCountry);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al crear el pais',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedCountry = await this.updateCountryUseCase.execute(
        req.params.id,
        req.body
      );
      customSuccessData(
        res,
        200,
        'Pais actualizado exitosamente',
        updatedCountry
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al actualizar el pais',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedCountry = await this.deleteCountryUseCase.execute(
        req.params.id
      );
      customSuccessData(
        res,
        200,
        'Pais eliminado exitosamente',
        deletedCountry
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al eliminar el pais',
        error.message
      );
      next(customErrorMessage);
    }
  }
}
