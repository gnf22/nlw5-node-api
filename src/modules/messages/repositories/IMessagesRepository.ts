import { ICreateMessageDTO } from '../dtos/ICreateMessageDTO';
import { Message } from '../infra/typeorm/entities/Message';

export interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
}
