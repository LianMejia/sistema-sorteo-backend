import { diContainer } from '@/shared';
import { NextFunction, Request, Response, Router } from 'express';
import { SorteoController } from '../controller';
import validateFields from '@/shared/infrastructure/middlewares/validate-fields.middleware';
import {
  validateSorteoCreation,
  validateSorteoDelete,
  validateSorteoGetOne,
  validateSorteoUpdate,
} from '@/shared/infrastructure/middlewares/validators/sorteo.validators';

const router = Router();

const sorteoController =
  diContainer.resolve<SorteoController>('sorteoController');

router.get('/sorteos', (req, res, next) => sorteoController.getAll(res, next));

router.get(
  '/sorteos/:id',
  [...validateSorteoGetOne, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    sorteoController.getOne(req, res, next)
);

router.post(
  '/sorteos',
  [...validateSorteoCreation, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    sorteoController.create(req, res, next)
);

router.patch(
  '/sorteos/:id',
  [...validateSorteoUpdate, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    sorteoController.update(req, res, next)
);

router.delete(
  '/sorteos/:id',
  [...validateSorteoDelete, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    sorteoController.delete(req, res, next)
);

export default router;
