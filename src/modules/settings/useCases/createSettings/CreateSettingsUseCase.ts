import { inject, injectable } from 'tsyringe';

import { ICreateSettingDTO } from '../../dtos/ICreateSettingDTO';
import { Setting } from '../../infra/typeorm/entities/Setting';
import { ISettingsRepository } from '../../repositories/ISettingsRepository';

@injectable()
export class CreateSettingsUseCase {
  constructor(
    @inject('SettingsRepository')
    private settingsRepository: ISettingsRepository,
  ) {}

  async execute({ chat, username }: ICreateSettingDTO): Promise<Setting> {
    const setting = await this.settingsRepository.create({
      chat,
      username,
    });

    return setting;
  }
}
