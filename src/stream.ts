import Mastodon from './index';

const client = new Mastodon({
  url: 'https://mstdn.jp',
  streamingUrl: 'wss://mstdn.jp',
});

(async () => {
  try {
    console.log(await client.removeStatus('1'));
  } catch (e) {
    console.warn(e.name, e.message);
  }
})()
