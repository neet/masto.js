export interface Link {
  readonly next?: string;
  readonly prev?: string;
}

const VALUE = /^<(.+?)>$/;
const REL = /^rel="(.+?)"$/;

/**
 * https://docs.joinmastodon.org/api/guidelines/#pagination
 */
export const parseLink = (header?: string | null): Link => {
  if (header == undefined) {
    return {};
  }

  return Object.fromEntries(
    header.split(', ').map((entry) => {
      if (entry === '') return [];

      const pair = entry.split('; ');
      const value = pair[0]?.match(VALUE)?.[1];
      const rel = pair[1]?.match(REL)?.[1];

      if (value == undefined) {
        throw new TypeError(`No value provided for link entry ${entry}`);
      }

      if (rel == undefined) {
        throw new TypeError(`No rel provided for link entry ${entry}`);
      }

      return [rel, value];
    }),
  ) as unknown as Link;
};
