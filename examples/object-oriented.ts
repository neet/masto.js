import type { MastoClient, Notification, Status } from 'masto';
import { login } from 'masto';

class MyBot {
  private masto: MastoClient;

  constructor(masto: MastoClient) {
    this.masto = masto;
  }

  static async init() {
    const masto = await login({
      url: process.env.URI as string,
      accessToken: process.env.ACCESS_TOKEN as string,
    });
    return new MyBot(masto);
  }

  async subscribe() {
    const timeline = await this.masto.stream.streamUser();

    // Add handlers
    timeline.on('update', this.handleUpdate);
    timeline.on('notification', this.handleNotification);
  }

  private handleUpdate = (status: Status) => {
    const { content, account } = status;
    console.log(`${account.username} said ${content}`);
  };

  private handleNotification = async (notification: Notification) => {
    // When your status got favourited, log
    if (notification.type === 'favourite') {
      console.log(`${notification.account.username} favourited your status!`);
    }

    // When you got a mention, reply
    if (notification.type === 'mention' && notification.status) {
      await this.masto.statuses.create({
        status: 'I received your mention!',
        inReplyToId: notification.status.id,
      });
    }

    // When you got followed, follow them back
    if (notification.type === 'follow') {
      await this.masto.accounts.follow(notification.account.id);
    }
  };
}

// main
MyBot.init()
  .then((myBot) => myBot.subscribe())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
