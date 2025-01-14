import { Router } from 'express';
import countryRoutes from '@/country/infrastructure/routes/country.routes';
import cityRoutes from '@/city/infrastructure/routes/city.routes';
import userRoutes from '@/user/infrastructure/routes/user.routes';
import categoryRoutes from '@/category/infrastructure/routes/category.routes';
import sorteoRoutes from '@/sorteo/infrastructure/routes/sorteo.routes';

const router = Router();

router.use(countryRoutes);
router.use(cityRoutes);
router.use(userRoutes);
router.use(categoryRoutes);
router.use(sorteoRoutes);

export default router;
