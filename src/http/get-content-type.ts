import type { MimeType } from '../serializers';

export const getContentType = (headers: Headers): MimeType | void => {
  const contentType = headers.get('Content-Type');
  if (typeof contentType !== 'string') {
    return;
  }

  return contentType.replace(/\s*;.*$/, '') as MimeType;
};
