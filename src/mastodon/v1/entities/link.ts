import type { Card } from './card';
import type { History } from './history';

export interface Link extends Card {
  history: History[];
}
