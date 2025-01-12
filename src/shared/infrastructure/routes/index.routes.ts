import { Router } from 'express';
import countryRoutes from '@/country/infrastructure/routes/country.routes';
import cityRoutes from '@/city/infrastructure/routes/city.routes';
import userRoutes from '@/user/infrastructure/routes/user.routes';

const router = Router();

router.use(countryRoutes);
router.use(cityRoutes);
router.use(userRoutes);

export default router;
