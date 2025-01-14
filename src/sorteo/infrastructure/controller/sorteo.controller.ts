import { customSuccessData } from '@/shared';
import CustomErrorMessage from '@/shared/helpers/custom-error-message.helpers';
import {
  CreateSorteoUseCase,
  DeleteSorteoUseCase,
  GetAllSorteosUseCase,
  GetOneSorteoUseCase,
  UpdateSorteoUseCase,
} from '@/sorteo/application';
import { Sorteo } from '@/sorteo/domain';
import { NextFunction, Request, Response } from 'express';

export class SorteoController {
  constructor(
    private getAllSorteosUseCase: GetAllSorteosUseCase,
    private getOneSorteoUseCase: GetOneSorteoUseCase,
    private createSorteoUseCase: CreateSorteoUseCase,
    private updateSorteoUseCase: UpdateSorteoUseCase,
    private deleteSorteoUseCase: DeleteSorteoUseCase
  ) {}

  async getAll(res: Response, next: NextFunction): Promise<void> {
    try {
      const sorteos = await this.getAllSorteosUseCase.execute();
      customSuccessData(res, 200, 'Sorteos obtenidos exitosamente', sorteos);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener los Sorteos',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sorteo = await this.getOneSorteoUseCase.execute(req.params.id);
      customSuccessData(res, 200, 'Sorteo obtenido exitosamente', sorteo);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener el Sorteo',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {
      category_id,
      name,
      description,
      is_active = false,
      image,
      start_date,
      end_date,
      total_tickets,
    } = req.body;

    const sorteo = new Sorteo({
      category_id: category_id,
      name: name,
      description: description,
      is_active: is_active,
      image: image,
      start_date: start_date,
      end_date: end_date,
      total_tickets: total_tickets,
    });
    try {
      const createdSorteo = await this.createSorteoUseCase.execute(sorteo);
      customSuccessData(res, 201, 'Sorteo creado exitosamente', createdSorteo);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al crear el sorteo',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedSorteo = await this.updateSorteoUseCase.execute(
        req.params.id,
        req.body
      );
      customSuccessData(
        res,
        200,
        'Sorteo actualizado exitosamente',
        updatedSorteo
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al actualizar el sorteo',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedSorteo = await this.deleteSorteoUseCase.execute(
        req.params.id
      );
      customSuccessData(
        res,
        200,
        'Sorteo eliminado exitosamente',
        deletedSorteo
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al eliminar el sorteo',
        error.message
      );
      next(customErrorMessage);
    }
  }
}
