## [4.0.2](https://github.com/neet/masto.js/compare/v4.0.1...v4.0.2) (2021-04-25)


### Bug Fixes

* Transform arrays inside an object ([d22a145](https://github.com/neet/masto.js/commit/d22a145da48ada5bff24d6c6b972164cf3fa6705))

## [4.0.1](https://github.com/neet/masto.js/compare/v4.0.0...v4.0.1) (2021-04-18)


### Bug Fixes

* Use build commit as a patch ([63b46ea](https://github.com/neet/masto.js/commit/63b46ea9198335e50edd34ff3e4ae2bcbb205cb4))

# [4.0.0](https://github.com/neet/masto.js/compare/v3.7.0...v4.0.0) (2021-03-26)


### Bug Fixes

* Add RC suffix to prerelease ([cb1e88a](https://github.com/neet/masto.js/commit/cb1e88a1e239fd99b4eeb5855823d3969e311b33))
* Fix curcular bug on flattenObject ([bd4463a](https://github.com/neet/masto.js/commit/bd4463acbb3538b4b72c5382c8f52c7d365e78f1))
* Fix EventType ([a8d35ae](https://github.com/neet/masto.js/commit/a8d35ae456fe1bc9c1d669ef2a181171d35c25b1))
* Fix naming convention for Admin API ([c5759cd](https://github.com/neet/masto.js/commit/c5759cd59b63429eddb01139fe876284f1978c08))
* Fix paging ([a1e499c](https://github.com/neet/masto.js/commit/a1e499cab860b4c6ce550cab02551d2974d9c941))
* Fix transform-keys for primitive data ([93c2a14](https://github.com/neet/masto.js/commit/93c2a149130af1cc7d06fd2adb46ea476b660e4e))
* Fix typo ([4a6733f](https://github.com/neet/masto.js/commit/4a6733f428890572cf7d041ea0b28c54fb74ff96))
* Fix ws connection issue ([71f6a90](https://github.com/neet/masto.js/commit/71f6a90767fdb8988a1535489329316630853015))
* Remove --prerelease ([8e6cd48](https://github.com/neet/masto.js/commit/8e6cd48bddb551d11afdc84a6782098588f4c088))


### Features

* Add abstraction for AxiosRequestConfig ([23be967](https://github.com/neet/masto.js/commit/23be9678775c84b75774d146f4b40c4859bd0992))
* Enable polling of media attachment by default ([03625e6](https://github.com/neet/masto.js/commit/03625e6b2a3ce339db1fd864a4eb48b0e626daef))
* Introduce new APIs ([69f6131](https://github.com/neet/masto.js/commit/69f6131a19fbe7a14a3fd8aea52ab003438a7203))
* **233:** Better error handling ([bbafee1](https://github.com/neet/masto.js/commit/bbafee11cb6dc3f4b0a8091846ebe026fe77d663))


### BREAKING CHANGES

* Monolithic `Masto` class has been segregated into several different classes and now you can access through the facede class

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
