export interface PollOption {
  /** Title of the option */
  title: string;
  /** Cont of votes for this option */
  votesCount?: number;
}

export interface Poll {
  /** ID of the poll */
  id: string;
  /** Duration the poll should be open for in seconds */
  expiresAt?: string | null;
  /** Whether the poll has been expired */
  expired: boolean;
  /** Whether multiple choices should be allowed */
  multiple: boolean;
  /** Count of the votes */
  votesCount: number;
  /** Array of options */
  options: PollOption[];
  /** Whether the authenticated user voted */
  voted?: boolean;
}
