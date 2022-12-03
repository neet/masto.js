import type { V1 } from 'masto';
import { login } from 'masto';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const main = async () => {
  const masto = await login({ url: 'https://example.com' });
  const timeline = await masto.v1.stream.streamPublicTimeline();

  const update$ = fromEvent<V1.Status>(timeline, 'update');
  const notification$ = fromEvent<V1.Notification>(timeline, 'notifications');

  update$.subscribe((status) => {
    console.log(status.account.username);
  });

  notification$
    .pipe(
      filter((notification) => notification.type === 'mention'),
      map((notification) => notification.status?.content),
    )
    .subscribe((body) => {
      console.log(body);
    });
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
