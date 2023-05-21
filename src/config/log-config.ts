import type { LogType } from '../logger';
import { LogLevel } from '../logger';

export interface MastoLogConfigProps {
  readonly logLevel?: LogType;
}

export class MastoLogConfig {
  constructor(private readonly props: MastoLogConfigProps = {}) {}

  getLevel(): LogLevel {
    return LogLevel.from(this.props.logLevel ?? 'warn');
  }
}
