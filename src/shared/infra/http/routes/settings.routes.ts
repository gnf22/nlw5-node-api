import { Router } from 'express';

import { CreateSettingController } from '../../../../modules/settings/useCases/createSettings/CreateSettingController';

export const settingsRoutes = Router();

const createSettingController = new CreateSettingController();

settingsRoutes.post('/', createSettingController.handle);
