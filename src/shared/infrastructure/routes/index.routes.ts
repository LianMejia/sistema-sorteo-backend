import { Router } from 'express';
import countryRoutes from '../../../country/infrastructure/routes/country.routes';

const router = Router();

router.use(countryRoutes);

export default router;
