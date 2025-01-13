import { diContainer } from '@/shared';
import { NextFunction, Request, Response, Router } from 'express';
import { CategoryController } from '../controller';
import validateFields from '@/shared/infrastructure/middlewares/validate-fields.middleware';
import {
  validateCategoryCreation,
  validateCategoryDelete,
  validateCategoryGetOne,
  validateCategoryUpdate,
} from '@/shared/infrastructure/middlewares/validators/category.validators';

const router = Router();

const categoryController =
  diContainer.resolve<CategoryController>('categoryController');

router.get('/categories', (req, res, next) =>
  categoryController.getAll(res, next)
);

router.get(
  '/categories/:id',
  [...validateCategoryGetOne, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    categoryController.getOne(req, res, next)
);

router.post(
  '/categories',
  [...validateCategoryCreation, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    categoryController.create(req, res, next)
);

router.patch(
  '/categories/:id',
  [...validateCategoryUpdate, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    categoryController.update(req, res, next)
);

router.delete(
  '/categories/:id',
  [...validateCategoryDelete, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    categoryController.delete(req, res, next)
);

export default router;
