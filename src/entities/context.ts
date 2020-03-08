import { Status } from '.';

/** Represents the tree around a given status. Used for reconstructing threads of statuses. */
export interface Context {
  /** Parents in the thread. */
  ancestors: Status[];
  /** Children in the thread. */
  descendants: Status[];
}
