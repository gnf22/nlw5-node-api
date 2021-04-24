import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
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
    const userAlreadyExists = await this.settingsRepository.findByUserName(
      username,
    );

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const setting = await this.settingsRepository.create({
      chat,
      username,
    });

    return setting;
  }
}
