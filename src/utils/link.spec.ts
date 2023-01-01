import { parseLink } from './link';

describe('Link', () => {
  it('parses link header', () => {
    const obj = parseLink(
      `<https://mastodon.example/api/v1/endpoint?max_id=7163058>; rel="next", <https://mastodon.example/api/v1/endpoint?since_id=7275607>; rel="prev"`,
    );
    expect(obj).toEqual({
      next: 'https://mastodon.example/api/v1/endpoint?max_id=7163058',
      prev: 'https://mastodon.example/api/v1/endpoint?since_id=7275607',
    });
  });

  it('parses link header without prev', () => {
    const obj = parseLink(
      `<https://mastodon.example/api/v1/endpoint?max_id=7163058>; rel="next"`,
    );
    expect(obj).toEqual({
      next: 'https://mastodon.example/api/v1/endpoint?max_id=7163058',
    });
  });

  it('parses link header without next', () => {
    const obj = parseLink(
      `<https://mastodon.example/api/v1/endpoint?since_id=7275607>; rel="prev"`,
    );
    expect(obj).toEqual({
      prev: 'https://mastodon.example/api/v1/endpoint?since_id=7275607',
    });
  });

  it('parses an empty string as a link header', () => {
    const obj = parseLink(``);
    expect(obj).toEqual({});
  });

  it('parses null as a link header', () => {
    const obj = parseLink();
    expect(obj).toEqual({});
  });
});
