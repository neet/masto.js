declare namespace mastodon.v1 {
  export type StatusEdit = Pick<
    Status,
    | "content"
    | "spoilerText"
    | "sensitive"
    | "createdAt"
    | "account"
    | "mediaAttachments"
    | "emojis"
  >;
}
