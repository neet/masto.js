import { Card } from './card';
import { History } from './history';

export interface Link extends Card {
  history: History[];
}
