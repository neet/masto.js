import { Masto, Status, Notification } from 'masto';

class MyBot {
  private uri: string;
  private token: string;
  private masto?: Masto;

  constructor(uri: string, token: string) {
    this.uri = uri;
    this.token = token;
  }

  async initialize() {
    this.masto = await Masto.login({
      uri: this.uri,
      accessToken: this.token,
    });
    await this.subscribe();
  }

  private async subscribe() {
    if (!this.masto) {
      return;
    }

    const timeline = await this.masto.streamUser();

    // Add handlers
    timeline.on('update', this.handleUpdate);
    timeline.on('notification', this.handleNotification);
  }

  private handleUpdate = (status: Status) => {
    const { content, account } = status;
    console.log(`${account.username} said ${content}`);
  }

  private handleNotification = async (notification: Notification) => {
    if (!this.masto) {
      return;
    }

    // When your status got favourited, log
    if (notification.type === 'favourite') {
      console.log(`${notification.account.username} favourited your status!`);
    }

    // When you got a mention, reply
    if (notification.type === 'mention' && notification.status) {
      await this.masto.createStatus({
        status: 'I received your mention!',
        inReplyToId: notification.status.id,
      });
    }

    // When you got followed, follow them back
    if (notification.type === 'follow') {
      await this.masto.followAccount(notification.account.id);
    }
  }
}

// main
(async () => {
  const bot = new MyBot('https://example.com', 'TOKEN');
  await bot.initialize();
})();
