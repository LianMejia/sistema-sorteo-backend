import { NextFunction, Request, Response } from 'express';
import {
  CreateUserUseCase,
  GetAllUsersUseCase,
  GetOneUserUseCase,
  UpdateUserUseCase,
} from '@/user/application';
import { User } from '@/user/domain';
import { customSuccessData } from '@/shared';
import CustomErrorMessage from '@/shared/helpers/custom-error-message.helpers';

export class UserController {
  constructor(
    private getAllUsersUseCase: GetAllUsersUseCase,
    private getOneUserUseCase: GetOneUserUseCase,
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase
  ) {}

  async getAll(res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.getAllUsersUseCase.execute();
      customSuccessData(res, 200, 'Usuarios obtenidas exitosamente', users);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener los usuarios',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await this.getOneUserUseCase.execute(req.params.id);
      customSuccessData(res, 200, 'Usuario obtenido exitosamente', user);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al obtener el usuario',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    const user = new User({
      email: email,
      password: password,
    });
    try {
      const createdUser = await this.createUserUseCase.execute(user);
      customSuccessData(res, 201, 'Usuario creado exitosamente', createdUser);
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al crear el usuario',
        error.message
      );
      next(customErrorMessage);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updatedUser = await this.updateUserUseCase.execute(
        req.params.id,
        req.body
      );
      customSuccessData(
        res,
        200,
        'Usuario actualizado exitosamente',
        updatedUser
      );
    } catch (error: any) {
      const customErrorMessage = new CustomErrorMessage(
        'Error al actualizar el usuario',
        error.message
      );
      next(customErrorMessage);
    }
  }
}
