export interface Cache<T> {
  set(value: T): void;
  getAll(): T[];
}
