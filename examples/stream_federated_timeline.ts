import Mastodon from '../src';

const client = new Mastodon();

client.setUrl('https://mastodon.social');
client.setStreamingUrl('wss://mastodon.social');
client.setToken('YOUR TOKEN');

const connection = client.stream('public', ({event, payload}) => {
  // When new toot was posted
  if (event === 'update') {
    console.log(`${payload.account.username}: ${payload.content}`);
  }
});

connection.then(() => {
  console.log('Connected Successfully!')
}).catch((error) => {
  console.log(error);
})
