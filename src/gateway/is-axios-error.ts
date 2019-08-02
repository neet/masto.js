import { AxiosError } from 'axios';

// https://github.com/axios/axios/issues/2013
export const isAxiosError = (error: unknown): error is AxiosError => {
  if (typeof error === 'object' && error !== null && 'response' in error) {
    return true;
  }

  return false;
};
