import { Router } from 'express';

import { CreateMessageController } from '../../../../modules/messages/useCases/createMessage/CreateMessageController';
import { ListMessagesController } from '../../../../modules/messages/useCases/listMessages/ListMessagesController';

export const messagesRoutes = Router();

const createMessagesController = new CreateMessageController();
const listMessagesController = new ListMessagesController();

messagesRoutes.post('/', createMessagesController.handle);
messagesRoutes.get('/:id', listMessagesController.handle);
