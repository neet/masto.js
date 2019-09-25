export interface Trend {
  name: string;
  url: string;
  history: TrendHistory[];
}

export interface TrendHistory {
  day: string;
  uses: string;
  accounts: string;
}
