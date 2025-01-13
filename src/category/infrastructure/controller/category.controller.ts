import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  GetAllCategoriesUseCase,
  GetOneCategoryUseCase,
  UpdateCategoryUseCase,
} from '@/category/application';
import { Category } from '@/category/domain';
import { customSuccessData } from '@/shared';
import CustomErrorMessage from '@/shared/helpers/custom-error-message.helpers';
import { NextFunction, Request, Response } from 'express';

export class CategoryController {
  constructor(
    private getAllCategoriesUseCase: GetAllCategoriesUseCase,
    private getOneCategoryUseCase: GetOneCategoryUseCase,
    private createCategoryUseCase: CreateCategoryUseCase,
    private updateCategoryUseCase: UpdateCategoryUseCase,
    private deleteCategoryUseCase: DeleteCategoryUseCase
  ) {}

  async getAll(res: Response, next: NextFunction): Promise<void> {
    try {
      const categories = await this.getAllCategoriesUseCase.execute();
      customSuccessData(
        res,
        200,
        'Categorias obtenidas exitosamente',
        categories
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener las categorias',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const category = await this.getOneCategoryUseCase.execute(req.params.id);
      customSuccessData(res, 200, 'Categoria obtenida exitosamente', category);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener la categoria',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { name, description, is_active = false } = req.body;

    const category = new Category({
      name: name,
      description: description,
      is_active: is_active,
    });
    try {
      const createdCategory = await this.createCategoryUseCase.execute(
        category
      );
      customSuccessData(
        res,
        201,
        'Categoria creada exitosamente',
        createdCategory
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al crear la categoria',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedCategory = await this.updateCategoryUseCase.execute(
        req.params.id,
        req.body
      );
      customSuccessData(
        res,
        200,
        'Categoria actualizada exitosamente',
        updatedCategory
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al actualizar la categoria',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedCategory = await this.deleteCategoryUseCase.execute(
        req.params.id
      );
      customSuccessData(
        res,
        200,
        'Categoria eliminada exitosamente',
        deletedCategory
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al eliminar la categoria',
        error.message
      );
      next(customErrorMessage);
    }
  }
}
