import { ICreateSettingDTO } from '../dtos/ICreateSettingDTO';
import { Setting } from '../infra/typeorm/entities/Setting';

export interface ISettingsRepository {
  create(data: ICreateSettingDTO): Promise<Setting>;
}
