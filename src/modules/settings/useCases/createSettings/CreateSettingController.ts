import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSettingsUseCase } from './CreateSettingsUseCase';

export class CreateSettingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body;

    const createSettingUseCase = container.resolve(CreateSettingsUseCase);

    const setting = await createSettingUseCase.execute({
      chat,
      username,
    });

    return response.status(201).json(setting);
  }
}
