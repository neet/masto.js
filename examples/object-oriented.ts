import { Masto, Status, Notification } from 'masto';

class MyBot {
  private uri: string;
  private token: string;
  private client?: Masto;

  constructor(uri: string, token: string) {
    this.uri = uri;
    this.token = token;
    this.initialize();
  }

  async initialize() {
    this.client = await Masto.login({
      uri: this.uri,
      accessToken: this.token,
    });
    await this.subscribe();
  }

  private async subscribe() {
    if (!this.client) {
      return;
    }

    const timeline = await this.client.streamUser();

    // Add handlers
    timeline.on('update', this.handleUpdate);
    timeline.on('notification', this.handleNotification);
  }

  private handleUpdate = (status: Status) => {
    const { content, account } = status;
    console.log(`${account.username} said ${content}`);
  }

  private handleNotification = async (notification: Notification) => {
    if (!this.client) {
      return;
    }

    const { type, account, status } = notification;

    // When your status got favourited, log
    if (type === 'favourite') {
      console.log(`${account.username} favourited your status!`);
    }

    // When you got a mention, reply
    if (type === 'mention' && status) {
      await this.client.createStatus({
        status: 'I received your mention!',
        inReplyToId: status.id,
      });
    }

    // When you got followed, follow them back
    if (type === 'follow') {
      await this.client.followAccount(account.id);
    }
  }
}

// main
(async () => {
  const bot = new MyBot('https://example.com', 'TOKEN');
  await bot.initialize();
})();
