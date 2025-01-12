import { Router } from 'express';
import countryRoutes from '../../../country/infrastructure/routes/country.routes';
import cityRoutes from '../../../city/infrastructure/routes/city.routes';

const router = Router();

router.use(countryRoutes);
router.use(cityRoutes);

export default router;
