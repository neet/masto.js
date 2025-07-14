export interface Rule {
  /** An identifier for the rule. */
  id: string;
  /** The rule to be followed. */
  text: string;
  /** Longer-form description of the rule. */
  hint: string;
  /** Available translations for this rule’s `text` and `hint`, as a Hash where keys are locale codes and values are hashes with `text` and `hint` keys. */
  translations: Record<string, { text: string; hint: string }>;
}
