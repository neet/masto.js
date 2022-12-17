export const getContentType = (headers: Headers): string | void => {
  const contentType = headers.get('Content-Type');
  if (typeof contentType !== 'string') {
    return;
  }

  return contentType.replace(/\s*;.*$/, '');
};
