import fs from 'node:fs';
import path from 'node:path';

import type { Cache } from './cache';

export class CacheFs<T> implements Cache<T> {
  private readonly dir = 'node_modules/.cache/tokens';

  set(value: T): void {
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(this.dir, `${Date.now()}.json`),
      JSON.stringify(value),
    );
  }

  getAll(): T[] {
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir, { recursive: true });
    }

    const files = fs
      .readdirSync(this.dir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => path.join(this.dir, file));

    const entries = [];

    for (const file of files) {
      const entry = fs.readFileSync(file, 'utf8');
      const parsed = JSON.parse(entry);
      entries.push(parsed);
    }

    return entries;
  }
}
