declare namespace mastodon.v1 {
  declare namespace Announcement {
    export interface Account {
      id: string;
      username: string;
      url: string;
      acct: string;
    }

    export interface Status {
      id: string;
      url: string;
    }
  }

  export interface Announcement {
    id: string;
    content: string;
    startsAt: string;
    endsAt: string;
    allDay: boolean;
    publishedAt: string;
    updatedAt: string;
    mentions: mastodon.v1.Announcement.Account[];
    statuses: mastodon.v1.Announcement.Status[];
    tags: mastodon.v1.Tag[];
    emojis: mastodon.v1.CustomEmoji[];
    reactions: mastodon.v1.Reaction[];
  }
}
