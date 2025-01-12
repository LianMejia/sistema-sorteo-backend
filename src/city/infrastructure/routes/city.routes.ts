import { diContainer } from '@/shared';
import { NextFunction, Request, Response, Router } from 'express';
import { CityController } from '../controller';
import {
  validateCityCreation,
  validateCityDelete,
  validateCityGetOne,
  validateCityUpdate,
} from '@/shared/infrastructure/middlewares/validators/city.validators';
import validateFields from '@/shared/infrastructure/middlewares/validate-fields.middleware';

const router = Router();

const cityController = diContainer.resolve<CityController>('cityController');

router.get('/cities', (req, res, next) => cityController.getAll(res, next));

router.get(
  '/cities/:id',
  [...validateCityGetOne, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    cityController.getOne(req, res, next)
);

router.post(
  '/cities',
  [...validateCityCreation, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    cityController.create(req, res, next)
);

router.patch(
  '/cities/:id',
  [...validateCityUpdate, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    cityController.update(req, res, next)
);

router.delete(
  '/cities/:id',
  [...validateCityDelete, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    cityController.delete(req, res, next)
);

export default router;
