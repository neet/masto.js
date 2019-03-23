export class MastodonError extends Error {
  constructor(public name: string, public message: string) {
    super();
  }
}
