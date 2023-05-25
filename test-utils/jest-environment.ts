import NodeEnvironment from 'jest-environment-node';

import { createMisc } from './misc';

class CustomEnvironment extends NodeEnvironment {
  override async setup(): Promise<void> {
    await super.setup();
    const misc = await createMisc();
    this.global.__misc__ = misc;
  }
}

export default CustomEnvironment;
