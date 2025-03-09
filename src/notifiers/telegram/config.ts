import { IsNumber, IsOptional, IsString, IsUrl, Validate } from 'class-validator';

import { IsNumberOrString } from '../../common/IsNumberOrString';
import { NotifierType } from '../service';
import { NotifierConfig } from '../base';

export class TelegramConfig extends NotifierConfig {
  @IsUrl()
  @IsOptional()
  readonly apiUrl: string;
  @IsString()
  readonly token: string;
  @Validate(IsNumberOrString)
  readonly chatId: string | number;
  @IsNumber()
  @IsOptional()
  readonly messageThreadId?: number;

  constructor(config: TelegramConfig) {
    super(NotifierType.TELEGRAM);
    this.apiUrl = config?.apiUrl || 'https://api.telegram.org';
    this.token = config.token;
    this.chatId = config.chatId;
    this.messageThreadId = config?.messageThreadId;
    this.validateConfig();
  }
}
