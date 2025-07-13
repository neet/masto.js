import { type Status } from "./status.js";

export type StatusEdit = Pick<
  Status,
  | "content"
  | "spoilerText"
  | "sensitive"
  | "createdAt"
  | "account"
  | "mediaAttachments"
  | "emojis"
  | "quote"
>;
