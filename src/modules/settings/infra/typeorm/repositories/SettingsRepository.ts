import { getRepository, Repository } from 'typeorm';

import { ICreateSettingDTO } from '../../../dtos/ICreateSettingDTO';
import { ISettingsRepository } from '../../../repositories/ISettingsRepository';
import { Setting } from '../entities/Setting';

export class SettingsRepository implements ISettingsRepository {
  private repository: Repository<Setting>;

  constructor() {
    this.repository = getRepository(Setting);
  }

  async create({ username, chat }: ICreateSettingDTO): Promise<Setting> {
    const setting = this.repository.create({
      username,
      chat,
    });

    await this.repository.save(setting);

    return setting;
  }

  async findByUserName(username: string): Promise<Setting | undefined> {
    const setting = await this.repository.findOne({
      where: { username },
    });

    return setting;
  }
}
