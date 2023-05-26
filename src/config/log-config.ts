import type { LogType } from '../adapters/logger';
import { LogLevel } from '../adapters/logger';

export interface MastoLogConfigProps {
  readonly logLevel?: LogType;
}

export class MastoLogConfig {
  constructor(private readonly props: MastoLogConfigProps = {}) {}

  getLevel(): LogLevel {
    return LogLevel.from(this.props.logLevel ?? 'warn');
  }
}
