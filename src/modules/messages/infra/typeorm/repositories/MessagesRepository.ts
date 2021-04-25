import { getRepository, Repository } from 'typeorm';

import { ICreateMessageDTO } from '../../../dtos/ICreateMessageDTO';
import { IMessagesRepository } from '../../../repositories/IMessagesRepository';
import { Message } from '../entities/Message';

export class MessagesRepository implements IMessagesRepository {
  private repository: Repository<Message>;

  constructor() {
    this.repository = getRepository(Message);
  }

  async create({
    admin_id,
    text,
    user_id,
  }: ICreateMessageDTO): Promise<Message> {
    const message = this.repository.create({
      admin_id,
      text,
      user_id,
    });

    await this.repository.save(message);

    return message;
  }
}
