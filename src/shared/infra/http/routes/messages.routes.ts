import { Router } from 'express';

import { CreateMessageController } from '../../../../modules/messages/useCases/createMessage/CreateMessageController';

export const messagesRoutes = Router();

const createMessagesController = new CreateMessageController();

messagesRoutes.post('/', createMessagesController.handle);
