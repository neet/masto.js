declare namespace mastodon.v1 {
  export interface Reaction {
    name: string;
    count: number;
    me: boolean;
    url: string;
    staticUrl: string;
  }
}
