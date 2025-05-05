import { type AccountRepository } from "./account-repository.js";
import { type CanonicalEmailBlockRepository } from "./canonical-email-block-repository.js";
import { type DimensionRepository } from "./dimension-repository.js";
import { type DomainAllowRepository } from "./domain-allow-repository.js";
import { type DomainBlockRepository } from "./domain-block-repository.js";
import { type EmailDomainBlockRepository } from "./email-domain-block-repository.js";
import { type IpBlockRepository } from "./ip-block-repository.js";
import { type MeasureRepository } from "./measure-repository.js";
import { type ReportRepository } from "./report-repository.js";
import { type RetentionRepository } from "./retention-repository.js";
import { type TrendRepository } from "./trend-repository.js";

export interface AdminRepository {
  readonly accounts: AccountRepository;
  readonly canonicalEmailBlocks: CanonicalEmailBlockRepository;
  readonly dimensions: DimensionRepository;
  readonly domainAllows: DomainAllowRepository;
  readonly domainBlocks: DomainBlockRepository;
  readonly emailDomainBlocks: EmailDomainBlockRepository;
  readonly ipBlocks: IpBlockRepository;
  readonly measures: MeasureRepository;
  readonly reports: ReportRepository;
  readonly retention: RetentionRepository;
  readonly trends: TrendRepository;
}
