import { type AccountsResource } from "./accounts.js";
import { type CanonicalEmailBlocksResource } from "./canonical-email-blocks.js";
import { type DimensionsResource } from "./dimensions.js";
import { type DomainAllowsResource } from "./domain-allows.js";
import { type DomainBlocksResource } from "./domain-blocks.js";
import { type EmailDomainBlocksResource } from "./email-domain-blocks.js";
import { type IpBlocksResource } from "./ip-blocks.js";
import { type MeasuresResource } from "./measures.js";
import { type ReportsResource } from "./report-repository.js";
import { type RetentionResource } from "./retention.js";
import { type TrendsResource } from "./trends.js";

export interface AdminResource {
  readonly accounts: AccountsResource;
  readonly canonicalEmailBlocks: CanonicalEmailBlocksResource;
  readonly dimensions: DimensionsResource;
  readonly domainAllows: DomainAllowsResource;
  readonly domainBlocks: DomainBlocksResource;
  readonly emailDomainBlocks: EmailDomainBlocksResource;
  readonly ipBlocks: IpBlocksResource;
  readonly measures: MeasuresResource;
  readonly reports: ReportsResource;
  readonly retention: RetentionResource;
  readonly trends: TrendsResource;
}

/** @deprecated Use `AdminResource` instead */
export type AdminRepository = AdminResource;
