import { snakeCase } from 'change-case';

import type { Http, HttpMetaParams } from '../http';
import type { mastodon } from '../mastodon';
import { Paginator } from '../paginator';
import { noop } from '../utils/noop';
import { inferEncoding } from './encoding';
import { waitForMediaAttachment } from './wait-for';

const get =
  <T>(http: Http, context: string[]) =>
  (_: unknown, key: string) => {
    // Promise not permitted
    if (key === 'then') {
      return;
    }

    return createBuilder<T>(http, [...context, key]);
  };

const apply =
  (http: Http, context: string[]) =>
  (_1: unknown, _2: unknown, args: unknown[]): unknown => {
    const action = context.pop();

    if (action == undefined) {
      throw new Error('No action specified');
    }

    if (action === 'select') {
      return createBuilder(http, [...context, ...(args as string[])]);
    }

    const data = args[0];
    const path = '/' + context.map((name) => snakeCase(name)).join('/');
    const meta = {
      encoding: inferEncoding(action, path),
      ...(args[1] as HttpMetaParams),
    } as HttpMetaParams;

    switch (action) {
      case 'fetch': {
        return http.get(path, data, meta);
      }
      case 'create': {
        if (path === '/api/v2/media') {
          return http
            .post<mastodon.v1.MediaAttachment>(path, data, meta)
            .then((media) => {
              return waitForMediaAttachment(http, media.id);
            });
        }

        return http.post(path, data, meta);
      }
      case 'update': {
        return http.patch(path, data, meta);
      }
      case 'remove': {
        return http.delete(path, data, meta);
      }
      case 'list': {
        return new Paginator(http, path, data);
      }
      default: {
        const customAction = [path, snakeCase(action)].join('/');
        return http.post(customAction, data);
      }
    }
  };

export const createBuilder = <T>(http: Http, context: string[] = []): T => {
  return new Proxy(noop, {
    get: get(http, context),
    apply: apply(http, context),
  }) as T;
};
