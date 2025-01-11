import { NextFunction, Request, Response, Router } from 'express';
import { CountryController } from '../controller';
import {
  diContainer,
  validateCountryCreation,
  validateCountryDelete,
  validateCountryGetOne,
  validateCountryUpdate,
} from '@/shared';
import validateFields from '@/shared/infrastructure/middlewares/validate-fields.middleware';

const router = Router();

const countryController =
  diContainer.resolve<CountryController>('CountryController');

router.get('/api/countries', (req, res, next) =>
  countryController.getAll(res, next)
);
router.get(
  '/api/countries/:id',
  [...validateCountryGetOne, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    countryController.getOne(req, res, next)
);
router.post(
  '/api/countries',
  [...validateCountryCreation, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    countryController.create(req, res, next)
);
router.patch(
  '/api/countries/:id',
  [...validateCountryUpdate, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    countryController.update(req, res, next)
);
router.delete(
  '/api/countries/:id',
  [...validateCountryDelete, validateFields],
  (req: Request, res: Response, next: NextFunction) =>
    countryController.delete(req, res, next)
);

export default router;
