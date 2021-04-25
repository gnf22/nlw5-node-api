import { inject, injectable } from 'tsyringe';

import { Message } from '../../infra/typeorm/entities/Message';
import { IMessagesRepository } from '../../repositories/IMessagesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
export class ListMessagesUseCase {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<Message[]> {
    const messages = await this.messagesRepository.listMessages(user_id);

    return messages;
  }
}
