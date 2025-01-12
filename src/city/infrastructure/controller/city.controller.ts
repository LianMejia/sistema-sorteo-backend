import {
  CreateCityUseCase,
  DeleteCityUseCase,
  GetAllCitiesUseCase,
  GetOneCityUseCase,
  UpdateCityUseCase,
} from '@/city/Application';
import { City } from '@/city/Domain';
import { customSuccessData } from '@/shared';
import CustomErrorMessage from '@/shared/helpers/custom-error-message.helpers';
import { NextFunction, Request, Response } from 'express';

export class CityController {
  constructor(
    private getAllCitiesUseCase: GetAllCitiesUseCase,
    private getOneCityUseCase: GetOneCityUseCase,
    private createCityUseCase: CreateCityUseCase,
    private updateCityUseCase: UpdateCityUseCase,
    private deleteCityUseCase: DeleteCityUseCase
  ) {}

  async getAll(res: Response, next: NextFunction): Promise<void> {
    try {
      const cities = await this.getAllCitiesUseCase.execute();
      customSuccessData(res, 200, 'Ciudades obtenidas exitosamente', cities);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener las ciudades',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const city = await this.getOneCityUseCase.execute(req.params.id);
      customSuccessData(res, 200, 'Ciudad obtenido exitosamente', city);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener la ciudad',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { country_id, name, is_active = false } = req.body;

    const city = new City({
      country_id: country_id,
      name: name,
      is_active: is_active,
    });
    try {
      const createdCity = await this.createCityUseCase.execute(city);
      customSuccessData(res, 201, 'Ciudad creada exitosamente', createdCity);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al crear la ciudad',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedCity = await this.updateCityUseCase.execute(
        req.params.id,
        req.body
      );
      customSuccessData(
        res,
        200,
        'Ciudad actualizada exitosamente',
        updatedCity
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al actualizar la ciudad',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedCity = await this.deleteCityUseCase.execute(req.params.id);
      customSuccessData(res, 200, 'Ciudad eliminada exitosamente', deletedCity);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al eliminar la ciudad',
        error.message
      );
      next(customErrorMessage);
    }
  }
}
