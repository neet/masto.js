/**
 * Represents an IP address associated with a user.
 * @see https://docs.joinmastodon.org/entities/Admin_Ip/
 */
export interface Ip {
  ip: string;
  usedAt: string;
}
