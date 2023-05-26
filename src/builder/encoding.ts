import type { Encoding } from '../interfaces';

export const inferEncoding = (action: string, path: string): Encoding => {
  if (
    (action === 'create' && path === '/api/v1/accounts') ||
    (action === 'update' && path === '/api/v1/update_credentials') ||
    (action === 'create' && path === '/api/v1/email') ||
    (action === 'create' && path === '/api/v1/featured_tag') ||
    (action === 'create' && path === '/api/v1/media') ||
    (action === 'create' && path === '/api/v2/media')
  ) {
    return 'multipart-form';
  }

  return 'json';
};
