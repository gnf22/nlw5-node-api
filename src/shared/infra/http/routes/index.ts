import { Router } from 'express';

import { settingsRoutes } from './settings.routes';

export const router = Router();

router.use('/settings', settingsRoutes);
