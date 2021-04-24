import { Router } from 'express';

import { settingsRoutes } from './settings.routes';
import { usersRoutes } from './user.routes';

export const router = Router();

router.use('/settings', settingsRoutes);

router.use('/users', usersRoutes);
