import { expectTypeOf, test } from "vitest";

import { type Account, type AccountSource } from "./v1/account.js";
import { type Application } from "./v1/application.js";
import { type DomainBlock } from "./v1/domain-block.js";
import {
  type MediaAttachment,
  type MediaAttachmentMeta,
  type MediaAttachmentMetaFocus,
} from "./v1/media-attachment.js";
import { type NotificationRequest } from "./v1/notification-request.js";
import { type Poll } from "./v1/poll.js";
import { type Quote } from "./v1/quote.js";
import { type ShallowQuote } from "./v1/shallow-quote.js";
import { type Status } from "./v1/status.js";
import { type InstanceRegistrations } from "./v2/instance.js";

type IsOptional<T, K extends keyof T> = Pick<T, K> extends Required<Pick<T, K>>
  ? false
  : true;

test("keeps nullable and optional entity properties distinct", () => {
  expectTypeOf<Account["discoverable"]>().toEqualTypeOf<boolean | null>();
  expectTypeOf<Account["noindex"]>().toEqualTypeOf<boolean | undefined>();
  expectTypeOf<Account["moved"]>().toEqualTypeOf<Account | undefined>();
  expectTypeOf<IsOptional<Account, "discoverable">>().toEqualTypeOf<false>();
  expectTypeOf<IsOptional<Account, "noindex">>().toEqualTypeOf<true>();

  expectTypeOf<AccountSource["privacy"]>().toEqualTypeOf<
    "public" | "unlisted" | "private" | "direct"
  >();
  expectTypeOf<Application["website"]>().toEqualTypeOf<string | null>();
  expectTypeOf<Application["scopes"]>().toEqualTypeOf<string[]>();
  expectTypeOf<DomainBlock["comment"]>().toEqualTypeOf<string | undefined>();

  expectTypeOf<Status["quote"]>().toEqualTypeOf<
    Quote | ShallowQuote | null
  >();
  expectTypeOf<Status["favourited"]>().toEqualTypeOf<boolean | undefined>();
  expectTypeOf<IsOptional<Status, "quote">>().toEqualTypeOf<false>();
  expectTypeOf<IsOptional<Status, "favourited">>().toEqualTypeOf<true>();

  expectTypeOf<Poll["expiresAt"]>().toEqualTypeOf<string | null>();
  expectTypeOf<Poll["ownVotes"]>().toEqualTypeOf<number[] | undefined>();
  expectTypeOf<NotificationRequest["lastStatus"]>().toEqualTypeOf<
    Status | undefined
  >();

  expectTypeOf<MediaAttachment["description"]>().toEqualTypeOf<string | null>();
  expectTypeOf<MediaAttachmentMeta["focus"]>().toEqualTypeOf<
    MediaAttachmentMetaFocus | undefined
  >();
  expectTypeOf<
    IsOptional<MediaAttachmentMeta, "focus">
  >().toEqualTypeOf<true>();

  expectTypeOf<InstanceRegistrations["message"]>().toEqualTypeOf<
    string | null
  >();
});
