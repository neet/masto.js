import { transformKeys } from './transform-keys';

test('transforms', () => {
  const r = transformKeys(
    {
      uri: 'mastodon.social',
      title: 'Mastodon',
      short_description:
        'Server run by the main developers of the project <img draggable="false" alt="🐘" class="emojione" src="https://mastodon.social/emoji/1f418.svg" /> It is not focused on any particular niche interest - everyone is welcome as long as you follow our code of conduct!',
      description:
        'Server run by the main developers of the project <img draggable="false" alt="🐘" class="emojione" src="https://mastodon.social/emoji/1f418.svg" /> It is not focused on any particular niche interest - everyone is welcome as long as you follow our code of conduct!',
      email: 'staff@mastodon.social',
      version: '3.4.1',
      urls: { streaming_api: 'wss://mastodon.social' },
      stats: {
        user_count: 594893,
        status_count: 32665918,
        domain_count: 20681,
      },
      thumbnail:
        'https://files.mastodon.social/site_uploads/files/000/000/001/original/vlcsnap-2018-08-27-16h43m11s127.png',
      languages: ['en'],
      registrations: true,
      approval_required: false,
      invites_enabled: true,
      configuration: {
        statuses: {
          max_characters: 500,
          max_media_attachments: 4,
          characters_reserved_per_url: 23,
        },
        media_attachments: {
          supported_mime_types: [Array],
          image_size_limit: 10485760,
          image_matrix_limit: 16777216,
          video_size_limit: 41943040,
          video_frame_rate_limit: 60,
          video_matrix_limit: 2304000,
        },
        polls: {
          max_options: 4,
          max_characters_per_option: 50,
          min_expiration: 300,
          max_expiration: 2629746,
        },
      },
      contact_account: {
        id: '1',
        username: 'Gargron',
        acct: 'Gargron',
        display_name: 'Eugen',
        locked: false,
        bot: false,
        discoverable: true,
        group: false,
        created_at: '2016-03-16T00:00:00.000Z',
        note: '<p>Developer of Mastodon and administrator of mastodon.social. I post service announcements, development updates, and personal stuff.</p>',
        url: 'https://mastodon.social/@Gargron',
        avatar:
          'https://files.mastodon.social/accounts/avatars/000/000/001/original/d96d39a0abb45b92.jpg',
        avatar_static:
          'https://files.mastodon.social/accounts/avatars/000/000/001/original/d96d39a0abb45b92.jpg',
        header:
          'https://files.mastodon.social/accounts/headers/000/000/001/original/c91b871f294ea63e.png',
        header_static:
          'https://files.mastodon.social/accounts/headers/000/000/001/original/c91b871f294ea63e.png',
        followers_count: 471065,
        following_count: 450,
        statuses_count: 70783,
        last_status_at: '2021-11-21',
        emojis: [],
        fields: [[Object], [Object]],
      },
      rules: [
        {
          id: '1',
          text: 'Sexually explicit or violent media must be marked as sensitive when posting',
        },
        {
          id: '2',
          text: 'No racism, sexism, homophobia, transphobia, xenophobia, or casteism',
        },
        {
          id: '3',
          text: 'No incitement of violence or promotion of violent ideologies',
        },
        {
          id: '4',
          text: 'No harassment, dogpiling or doxxing of other users',
        },
        { id: '5', text: 'No content illegal in Germany' },
        { id: '6', text: 'No spam, advertising or bot accounts' },
      ],
    },
    (key) => key,
  );

  expect(r).toMatchInlineSnapshot(`
    Object {
      "approval_required": false,
      "configuration": Object {
        "media_attachments": Object {
          "image_matrix_limit": 16777216,
          "image_size_limit": 10485760,
          "supported_mime_types": Array [
            [Function],
          ],
          "video_frame_rate_limit": 60,
          "video_matrix_limit": 2304000,
          "video_size_limit": 41943040,
        },
        "polls": Object {
          "max_characters_per_option": 50,
          "max_expiration": 2629746,
          "max_options": 4,
          "min_expiration": 300,
        },
        "statuses": Object {
          "characters_reserved_per_url": 23,
          "max_characters": 500,
          "max_media_attachments": 4,
        },
      },
      "contact_account": Object {
        "acct": "Gargron",
        "avatar": "https://files.mastodon.social/accounts/avatars/000/000/001/original/d96d39a0abb45b92.jpg",
        "avatar_static": "https://files.mastodon.social/accounts/avatars/000/000/001/original/d96d39a0abb45b92.jpg",
        "bot": false,
        "created_at": "2016-03-16T00:00:00.000Z",
        "discoverable": true,
        "display_name": "Eugen",
        "emojis": Array [],
        "fields": Array [
          Array [
            [Function],
          ],
          Array [
            [Function],
          ],
        ],
        "followers_count": 471065,
        "following_count": 450,
        "group": false,
        "header": "https://files.mastodon.social/accounts/headers/000/000/001/original/c91b871f294ea63e.png",
        "header_static": "https://files.mastodon.social/accounts/headers/000/000/001/original/c91b871f294ea63e.png",
        "id": "1",
        "last_status_at": "2021-11-21",
        "locked": false,
        "note": "<p>Developer of Mastodon and administrator of mastodon.social. I post service announcements, development updates, and personal stuff.</p>",
        "statuses_count": 70783,
        "url": "https://mastodon.social/@Gargron",
        "username": "Gargron",
      },
      "description": "Server run by the main developers of the project <img draggable=\\"false\\" alt=\\"🐘\\" class=\\"emojione\\" src=\\"https://mastodon.social/emoji/1f418.svg\\" /> It is not focused on any particular niche interest - everyone is welcome as long as you follow our code of conduct!",
      "email": "staff@mastodon.social",
      "invites_enabled": true,
      "languages": Array [
        "en",
      ],
      "registrations": true,
      "rules": Array [
        Object {
          "id": "1",
          "text": "Sexually explicit or violent media must be marked as sensitive when posting",
        },
        Object {
          "id": "2",
          "text": "No racism, sexism, homophobia, transphobia, xenophobia, or casteism",
        },
        Object {
          "id": "3",
          "text": "No incitement of violence or promotion of violent ideologies",
        },
        Object {
          "id": "4",
          "text": "No harassment, dogpiling or doxxing of other users",
        },
        Object {
          "id": "5",
          "text": "No content illegal in Germany",
        },
        Object {
          "id": "6",
          "text": "No spam, advertising or bot accounts",
        },
      ],
      "short_description": "Server run by the main developers of the project <img draggable=\\"false\\" alt=\\"🐘\\" class=\\"emojione\\" src=\\"https://mastodon.social/emoji/1f418.svg\\" /> It is not focused on any particular niche interest - everyone is welcome as long as you follow our code of conduct!",
      "stats": Object {
        "domain_count": 20681,
        "status_count": 32665918,
        "user_count": 594893,
      },
      "thumbnail": "https://files.mastodon.social/site_uploads/files/000/000/001/original/vlcsnap-2018-08-27-16h43m11s127.png",
      "title": "Mastodon",
      "uri": "mastodon.social",
      "urls": Object {
        "streaming_api": "wss://mastodon.social",
      },
      "version": "3.4.1",
    }
  `);
});
