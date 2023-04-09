import type { MastoConfig } from '../../../config';
import type { Logger } from '../../../logger';
import type { Ws, WsEvents } from '../../../ws';

export class StreamRepository {
  constructor(
    private readonly ws: Ws,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamUser(): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'user',
    });
  }

  /**
   * Starting federated timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamPublicTimeline(): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'public',
    });
  }

  /**
   * Starting local timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamCommunityTimeline(): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'public:local',
    });
  }

  /**
   * Stream remote public timeline
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamRemotePublicTimeline(): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'public:remote',
    });
  }

  /**
   * Starting tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamTagTimeline(id: string): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'hashtag',
      tag: id,
    });
  }

  /**
   * Starting local tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamLocalTagTimeline(id: string): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'hashtag:local',
      tag: id,
    });
  }

  /**
   * Starting list timeline streaming
   * @param id ID of the list
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamListTimeline(id: string): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'list',
      list: id,
    });
  }

  /**
   * Starting direct timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  streamDirectTimeline(): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'direct',
    });
  }
}
