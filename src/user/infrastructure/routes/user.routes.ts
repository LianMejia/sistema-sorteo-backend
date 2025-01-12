import { NextFunction, Request, Response, Router } from 'express';
import { UserController } from '../controller';
import {
  diContainer,
  validateUserCreation,
  validateUserGetOne,
  validateUserUpdate,
} from '@/shared';
import validateFields from '@/shared/infrastructure/middlewares/validate-fields.middleware';

const router = Router();

const userController = diContainer.resolve<UserController>('userController');

router.get('/users', (req, res, next) => userController.getAll(res, next));

router.get(
  '/users/:id',
  [...validateUserGetOne, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    userController.getOne(req, res, next)
);

router.post(
  '/users',
  [...validateUserCreation, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    userController.create(req, res, next)
);

router.patch(
  '/users/:id',
  [...validateUserUpdate, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    userController.update(req, res, next)
);

export default router;
