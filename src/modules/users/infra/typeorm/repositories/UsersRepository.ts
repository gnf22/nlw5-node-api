import { getRepository, Repository } from 'typeorm';

import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(email: string): Promise<User> {
    const user = this.repository.create({
      email,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }
}
