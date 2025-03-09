import { validateSync } from 'class-validator';

import { NotifierType } from '../service';

export abstract class NotifierConfig {
  type: NotifierType;

  protected constructor(type: NotifierType) {
    this.type = type;
  }

  protected validateConfig() {
    const errors = validateSync(this, { validationError: { target: false } });
    if (errors.length > 0) {
      throw JSON.stringify({ notifier: this.type, status: 'Invalid configuration', errors }, null, 2);
    }
  }
}
const l = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  host_whitelist: false,
  host_blacklist: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  allow_fragments: true,
  allow_query_components: true,
  disallow_auth: false,
  validate_length: true,
};
