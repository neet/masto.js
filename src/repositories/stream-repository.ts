import type { MastoConfig } from '../config';
import { version } from '../decorators';
import type { Ws, WsEvents } from '../ws';

export class StreamRepository {
  constructor(
    private readonly ws: Ws,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
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
  @version({ since: '0.0.0' })
  streamDirectTimeline(): Promise<WsEvents> {
    return this.ws.stream('/api/v1/streaming', {
      stream: 'direct',
    });
  }
}
