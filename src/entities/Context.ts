import { Status } from './status';

export interface Context {
  /** The ancestors of the status in the conversation, as a list of Statuses */
  ancestors: Status[];

  /** The descendants of the status in the conversation, as a list of Statuses */
  descendants: Status[];
}
