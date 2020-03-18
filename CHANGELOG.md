## 3.0.0
This is the 3rd major version of Masto.js 🎉

### Breaking Changes
- The response objects are now `camelCase` #224 #230
- Renamed `uploadMediaAttachment` to `createMediaAttachment` #229
- Decouple 3rd party packages from Masto.js #228 #225

### Added
- Add missing `readCoversation` and `removeConversation`

### Fixed
- Better version handling #231

### Updated
- Follow TSDoc comments to docs.joinmastodon.org
- Update dependencies

### Internal changes
- Added `eslint-simple-import-sort` 0dba63b3920e0d83b0205a41d36021238df1b75c
- Updated examples

## 2.8.2
### Chagnes
- Use @rollup/* packages instead of rollup-* #194 #193
- Use cSpell #195
- Update dependencies

## 2.8.1
### Fixes
- Fix URL of `dismissNotification` #170 #169
- Fix typo of `dismissNotification`

### Changes
- Upgrade dependencies #171

## 2.8.0
- Bump TypeScript 3.7.0 #166
  - Also removes ts-optchain
- Bump Rollup.js and rollup-plugin-typescript2 #140

## 2.7.2
### Fixed
- Add `reason` param to CreateAccountParams #153
- Deprecate `fetchStatusCard` #152

### Updated
- Bump dependencies

## 2.7.1
> Accidentally published.

## 2.7.0
### Added
- Mastodon 3.0 support (#129, #130, #139)
	- Add Masto.fetchTrends for `GET /api/v1/trends`
	- Add Masto.fetchMarkers for `GET /api/v1/markers`
	- Add Masto.createMarkers for `POST /api/v1/markers`
	- Add Masto.fetchFeaturedTags for `GET /api/v1/featured_tags`
	- Add Masto.createFeaturedTag for `POST /api/v1/featured_tags`
	- Add Masto.removeFeaturedTag for `DELETE /api/v1/featured_tags`
	- Add Masto.fetchDirectory for `DELETE /api/v1/directory`
	- Add `exclude_unreviewed` option to Masto.search
	- Add `category` to Emoji entity
	- Add return type to `authorizeFollowRequest` and `rejectFollowRequest`

### Changed
- Updated dependencies #130
- Use GitHub Actions instead of Circle CI #131
