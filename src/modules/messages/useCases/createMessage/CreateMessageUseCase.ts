import { inject, injectable } from 'tsyringe';

import { ICreateMessageDTO } from '../../dtos/ICreateMessageDTO';
import { Message } from '../../infra/typeorm/entities/Message';
import { IMessagesRepository } from '../../repositories/IMessagesRepository';

@injectable()
export class CreateMessageUseCase {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  async execute({
    admin_id,
    text,
    user_id,
  }: ICreateMessageDTO): Promise<Message> {
    const message = await this.messagesRepository.create({
      text,
      user_id,
      admin_id,
    });

    return message;
  }
}
