import { login, Status, Notification } from 'masto';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

(async () => {
  const masto = await login({ url: 'https://example.com' });
  const timeline = await masto.stream.streamPublicTimeline();

  const update$ = fromEvent<Status>(timeline, 'update');
  const notification$ = fromEvent<Notification>(timeline, 'notifications');

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
})();
