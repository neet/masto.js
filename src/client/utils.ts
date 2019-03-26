import { AxiosError } from 'axios';

// https://github.com/axios/axios/issues/2013
export const isAxiosError = (error: any): error is AxiosError => {
  if (error.response) {
    return true;
  }

  return false;
};

// Remove trailing slash
export const normalizeUrl = (url: string) => {
  return url.replace(/\/$/, '');
};
