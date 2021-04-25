import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMessagesUseCase } from './ListMessagesUseCase';

export class ListMessagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listMessagesUseCase = container.resolve(ListMessagesUseCase);

    const messages = await listMessagesUseCase.execute({
      user_id: id,
    });

    return response.json(messages);
  }
}
