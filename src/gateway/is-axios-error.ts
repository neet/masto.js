import type { AxiosError } from 'axios';

// https://github.com/axios/axios/issues/2013
export const isAxiosError = (error: unknown): error is AxiosError => {
  if (typeof error === 'object' && error !== null && 'isAxiosError' in error) {
    return (error as { isAxiosError: boolean }).isAxiosError;
  }

  return false;
};
