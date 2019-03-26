export interface PollOption {
  /** Title of the option */
  title: string;
  /** Cont of votes for this option */
  votes_count?: number;
}

export interface Poll {
  /** ID of the poll */
  id: string;
  /** Expire date */
  expires_at?: string | null;
  /** Whether the poll has been expired */
  expired: boolean;
  /** Whether the poll is multiple */
  multiple: boolean;
  /** Count of the votes */
  votes_count: number;
  /** Array of options */
  options: PollOption[];
  /** Whether the authenticated user voted */
  voted?: boolean;
}
