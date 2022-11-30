## [4.7.1](https://github.com/neet/masto.js/compare/v4.7.0...v4.7.1) (2022-11-30)


### Bug Fixes

* Correct iterable used when fetching following accounts ([9dc35fb](https://github.com/neet/masto.js/commit/9dc35fbca470bb99a7bfc047fc621615ad21ad5b))
* Fix suggestion API URL ([2887c98](https://github.com/neet/masto.js/commit/2887c98ef29e4256e199c2bbe10ae4baa4e3f1b9))
* Rename fetchAll to fetchTags ([027e57c](https://github.com/neet/masto.js/commit/027e57cf066d7463f72ba9c47aa6e008adc626cd))
* Use Sec-Websocket-Protocols when disabling version check ([7755fbd](https://github.com/neet/masto.js/commit/7755fbd2772c43d0fce04d7c250664d2dca44b49))

# [4.7.0](https://github.com/neet/masto.js/compare/v4.6.10...v4.7.0) (2022-11-29)


### Features

* Support tag follow / unfollow ([#709](https://github.com/neet/masto.js/issues/709)) ([6883fb9](https://github.com/neet/masto.js/commit/6883fb9e2da2cb382d61d88b6b9a89b5792c03ee))

## [4.6.10](https://github.com/neet/masto.js/compare/v4.6.9...v4.6.10) (2022-11-27)


### Bug Fixes

* Allow passing null and undefined as a query parameter ([#707](https://github.com/neet/masto.js/issues/707)) ([1436dc6](https://github.com/neet/masto.js/commit/1436dc6c2186712ebff81c21089410456a781b87))

## [4.6.9](https://github.com/neet/masto.js/compare/v4.6.8...v4.6.9) (2022-11-26)


### Bug Fixes

* Actually send user-specified headers in `HttpAxiosImpl` ([b602fe4](https://github.com/neet/masto.js/commit/b602fe4cb16aad9dd41bf5ddaabee97a53720a0b)), closes [#697](https://github.com/neet/masto.js/issues/697)
* Encode URI components in serializer ([8a2be08](https://github.com/neet/masto.js/commit/8a2be086c6c8a63711e280ef1f1f290e45f4780d))
* **fetch:** Normalize header to be lowercase ([f7fce11](https://github.com/neet/masto.js/commit/f7fce11f55b0426ddfe74467071c4dc1e44eda57))
* Fix failing test in [#702](https://github.com/neet/masto.js/issues/702) ([a2a4c26](https://github.com/neet/masto.js/commit/a2a4c26df904d54d35eec0388b0e37fefcf70c59))
* read next link from response ([68c71bd](https://github.com/neet/masto.js/commit/68c71bd8f3154df72a2e309d848e7fd7b066da9d))
* Set `Paginator.nextParams` to an empty object after first request ([4ce57a6](https://github.com/neet/masto.js/commit/4ce57a63dd84a57faf6284c85287c9201a2ea582)), closes [#698](https://github.com/neet/masto.js/issues/698)
* Unmark `DefaultPaginationParams.{maxId, sinceId}` as internal parameters ([257359e](https://github.com/neet/masto.js/commit/257359e60b69d9afb0f98b265b8483cd975e97ce)), closes [#698](https://github.com/neet/masto.js/issues/698)
* Update Notification.type types ([#706](https://github.com/neet/masto.js/issues/706)) ([50c5c5c](https://github.com/neet/masto.js/commit/50c5c5c8adf4362d2b9daf7ce7c64bcfd3d02118))

## [4.6.8](https://github.com/neet/masto.js/compare/v4.6.7...v4.6.8) (2022-11-24)


### Bug Fixes

* Force to use Axios 1.1.3 ([#696](https://github.com/neet/masto.js/issues/696)) ([e3a94b8](https://github.com/neet/masto.js/commit/e3a94b8880f8cfb77c7f61e8cc5b63a17496ff30))

## [4.6.7](https://github.com/neet/masto.js/compare/v4.6.6...v4.6.7) (2022-11-24)


### Bug Fixes

* Use `serializeQueryString` in base-ws ([#693](https://github.com/neet/masto.js/issues/693)) ([fc6a00d](https://github.com/neet/masto.js/commit/fc6a00db9bcc39a89b976dd17456dfdbd88827ec))

## [4.6.6](https://github.com/neet/masto.js/compare/v4.6.5...v4.6.6) (2022-11-21)


### Bug Fixes

* Transform of URL search params' cases ([#690](https://github.com/neet/masto.js/issues/690)) ([a9582ff](https://github.com/neet/masto.js/commit/a9582ff1b29ef444f2bf0a719f367eeb3ded8a0b))

## [4.6.5](https://github.com/neet/masto.js/compare/v4.6.4...v4.6.5) (2022-11-20)


### Bug Fixes

* Use `params` instead of `data` in pagination ([#687](https://github.com/neet/masto.js/issues/687)) ([e333ac1](https://github.com/neet/masto.js/commit/e333ac12252742403f5c5683e827bd67e10e1465))

## [4.6.4](https://github.com/neet/masto.js/compare/v4.6.3...v4.6.4) (2022-11-19)


### Bug Fixes

* add suspended flag to account ([#685](https://github.com/neet/masto.js/issues/685)) ([fa8a45f](https://github.com/neet/masto.js/commit/fa8a45f0b81ae4d85d420da2bd195774f1b97acb))

## [4.6.3](https://github.com/neet/masto.js/compare/v4.6.2...v4.6.3) (2022-11-18)


### Bug Fixes

* Fix eslint warning in 682 ([1c860eb](https://github.com/neet/masto.js/commit/1c860eba015b3a4f8e2b121a20e428032af61836))

## [4.6.2](https://github.com/neet/masto.js/compare/v4.6.1...v4.6.2) (2022-11-16)


### Bug Fixes

* Add missing env variables to github actions ([a98a52c](https://github.com/neet/masto.js/commit/a98a52c467feda874f7d59a8b1f002a2b303d215))
* Remove legacy URL module to support non-Node.js env ([458340e](https://github.com/neet/masto.js/commit/458340e07c3d4b0fd6061c4bc14fe3345a2bb2c3))

## [4.6.1](https://github.com/neet/masto.js/compare/v4.6.0...v4.6.1) (2022-11-13)


### Bug Fixes

* Add missing non-iterable methods for timelines ([496aa04](https://github.com/neet/masto.js/commit/496aa0452b65fadc966d584714b726f75e7993bb))
* Fix URL /lists/:id/accounts ([fb20092](https://github.com/neet/masto.js/commit/fb20092902b357d09f5bfa8fc732a7b98c53c4cb))

# [4.6.0](https://github.com/neet/masto.js/compare/v4.5.1...v4.6.0) (2022-11-12)


### Bug Fixes

* Use Rails formed URL search params ([ff5daad](https://github.com/neet/masto.js/commit/ff5daadd11655bcd8ac5b37786f500efaff51cff))


### Features

* Add non-iterable fetch methods ([c158e0e](https://github.com/neet/masto.js/commit/c158e0e99c299fb71885299873070f5233849b52))

## [4.5.1](https://github.com/neet/masto.js/compare/v4.5.0...v4.5.1) (2022-11-11)


### Bug Fixes

* Remove obsolete debug code ([79cb0d8](https://github.com/neet/masto.js/commit/79cb0d803a70b6e8863766f20787c0aebebe5bc1))

# [4.5.0](https://github.com/neet/masto.js/compare/v4.4.1...v4.5.0) (2022-11-10)


### Features

* Add an option to disable version check ([782fa60](https://github.com/neet/masto.js/commit/782fa60909e12f409ffd7cd7528e64770c90a502))

## [4.4.1](https://github.com/neet/masto.js/compare/v4.4.0...v4.4.1) (2022-11-04)


### Bug Fixes

* Apply typescript-eslint only for ts files ([f69603e](https://github.com/neet/masto.js/commit/f69603e3ea685e7b57b54f4364d55d7d7c210eb5))
* Use cjs for rollup.config.js ([80cc322](https://github.com/neet/masto.js/commit/80cc322f2b373fb9505b881e7b7fd68142e4c36d))
* Use exports ([4383fe4](https://github.com/neet/masto.js/commit/4383fe4654fb92e78737dcd0da7bea48e7c3a362))

# [4.4.0](https://github.com/neet/masto.js/compare/v4.3.4...v4.4.0) (2022-06-20)


### Bug Fixes

* Fix build script ([24b1830](https://github.com/neet/masto.js/commit/24b183028c5e5f635159e66d78a06c02c9007566))
* Fix npm config ([b189848](https://github.com/neet/masto.js/commit/b189848747c687976fc0fd7556b19e1d87a9386f))


### Features

* Support Node.js 18 Fetch API ([f3085e6](https://github.com/neet/masto.js/commit/f3085e6a5a62a9a352c797fa44777ecf1c3ba444))

## [4.3.4](https://github.com/neet/masto.js/compare/v4.3.3...v4.3.4) (2022-06-19)


### Bug Fixes

* Change getContentType to case insensitive ([b20bf4c](https://github.com/neet/masto.js/commit/b20bf4c0a6c886dcbbbccc89bf2f44d589704794))
* HttpNativeImpl.request()'s return type ([5536100](https://github.com/neet/masto.js/commit/5536100ac7d002d5e33b56edaa5b5de9cf1f7907))
* Let HttpNativeImpl make multipart/form-data w/ appropriate boundary ([f277388](https://github.com/neet/masto.js/commit/f2773886f77b146435834aa5c5bce91481227e86))
* Throw error when content-type is not set on response ([b6e4a8c](https://github.com/neet/masto.js/commit/b6e4a8cb9f97d308b403069480af5064824e68b2))
* Trim content type params from HTTP responses ([281cfcb](https://github.com/neet/masto.js/commit/281cfcb8aae35b6ac6f58e6232a2275cd4f2c404))

## [4.3.3](https://github.com/neet/masto.js/compare/v4.3.2...v4.3.3) (2022-06-11)

## [4.3.2](https://github.com/neet/masto.js/compare/v4.3.1...v4.3.2) (2022-06-05)

## [4.3.1](https://github.com/neet/masto.js/compare/v4.3.0...v4.3.1) (2022-04-11)


### Bug Fixes

* Fix unhandled promise rejection of examples ([d205bf8](https://github.com/neet/masto.js/commit/d205bf8a893473aa0005279fe93cc7a1e7dc85e5))

# [4.3.0](https://github.com/neet/masto.js/compare/v4.2.7...v4.3.0) (2022-04-04)


### Features

* Add familiar followers, remove from followers ([2761173](https://github.com/neet/masto.js/commit/2761173aa18946965926845df5e3468cf594c307))
* Add ruleIds and category param to reports ([44edad9](https://github.com/neet/masto.js/commit/44edad94cb6425995e18c9a560ac412bbcbc5c2f))
* Add type field to FetchNotificationsParams ([7e44e22](https://github.com/neet/masto.js/commit/7e44e22a5fee1fddee2e5c3ce0713a7482241d89))
* Remove follow scope ([bafc5df](https://github.com/neet/masto.js/commit/bafc5df3b845b35e33a190588b23821889831b5b))
* Support status edit api ([8621213](https://github.com/neet/masto.js/commit/862121396fa120739b965ae7d29fd4481776ca1d))
* Update trends api ([3d1d236](https://github.com/neet/masto.js/commit/3d1d236d2fe804e632fac7fa9983512e1f6909a4))

## [4.2.7](https://github.com/neet/masto.js/compare/v4.2.6...v4.2.7) (2022-03-19)


### Bug Fixes

* Use getter for timeline.{home,public} ([99e1c23](https://github.com/neet/masto.js/commit/99e1c235cf278fb0eb476d8224bad4f4b13e9932))

## [4.2.6](https://github.com/neet/masto.js/compare/v4.2.5...v4.2.6) (2022-02-17)

## [4.2.5](https://github.com/neet/masto.js/compare/v4.2.4...v4.2.5) (2022-02-06)

## [4.2.4](https://github.com/neet/masto.js/compare/v4.2.3...v4.2.4) (2022-01-04)

## [4.2.3](https://github.com/neet/masto.js/compare/v4.2.2...v4.2.3) (2022-01-03)

## [4.2.2](https://github.com/neet/masto.js/compare/v4.2.1...v4.2.2) (2021-12-02)

## [4.2.1](https://github.com/neet/masto.js/compare/v4.2.0...v4.2.1) (2021-11-22)


### Bug Fixes

* Use streamingApiUrl to resolve streaming api ([451203f](https://github.com/neet/masto.js/commit/451203fe10aa92b82f9f48f1ed094bc50f35cf13))

# [4.2.0](https://github.com/neet/masto.js/compare/v4.1.19...v4.2.0) (2021-11-08)


### Features

* Support instance configuration ([b7e5f23](https://github.com/neet/masto.js/commit/b7e5f23ac7320d73f76086a71bfa13234970db59))

## [4.1.19](https://github.com/neet/masto.js/compare/v4.1.18...v4.1.19) (2021-11-03)

## [4.1.18](https://github.com/neet/masto.js/compare/v4.1.17...v4.1.18) (2021-10-10)

## [4.1.17](https://github.com/neet/masto.js/compare/v4.1.16...v4.1.17) (2021-10-03)

## [4.1.16](https://github.com/neet/masto.js/compare/v4.1.15...v4.1.16) (2021-09-21)


### Bug Fixes

* Remove mock exports ([e50d27c](https://github.com/neet/masto.js/commit/e50d27c53355c0b3f411ba1a94ce31246e89d012))

## [4.1.15](https://github.com/neet/masto.js/compare/v4.1.14...v4.1.15) (2021-09-17)

## [4.1.14](https://github.com/neet/masto.js/compare/v4.1.13...v4.1.14) (2021-09-12)


### Bug Fixes

* Avoid unintuitive keyword like "facade" ([7f6b9bf](https://github.com/neet/masto.js/commit/7f6b9bfe6aa8b1181e6f35e04368245fa4bbaa27))
* Remove exports field in rollup config ([4c60880](https://github.com/neet/masto.js/commit/4c608803de221d4efa2a2d6f466f4b62f430465b))
* Remove imports of isomorhpic-form-data ([f61bfe5](https://github.com/neet/masto.js/commit/f61bfe5dae8f737fcb36ef6c2ae8c100583a98c9))
* Use rollup-plugin-auto-external ([ead7c36](https://github.com/neet/masto.js/commit/ead7c3686a2061848b50fb8984324d0baf0c113f))

## [4.1.13](https://github.com/neet/masto.js/compare/v4.1.12...v4.1.13) (2021-09-11)


### Bug Fixes

* Add exception handling for JSON.parse ([bb6c7d0](https://github.com/neet/masto.js/commit/bb6c7d0d34588fff0a985ec583e4cc61f1b3eebc))
* Include statusCode in the default MastoError ([88fa4dc](https://github.com/neet/masto.js/commit/88fa4dc6cc552eca1666e3d69cf5e02e87454352))

## [4.1.12](https://github.com/neet/masto.js/compare/v4.1.11...v4.1.12) (2021-09-03)

## [4.1.11](https://github.com/neet/masto.js/compare/v4.1.10...v4.1.11) (2021-09-02)

## [4.1.10](https://github.com/neet/masto.js/compare/v4.1.9...v4.1.10) (2021-08-18)


### Bug Fixes

* FIx NODE_IGNORE_MASTO_WARNINGS ([c84a6cf](https://github.com/neet/masto.js/commit/c84a6cfb2cbdc5e71fcd1c6b715b4a6615dc01bc))
* Fix prettier warning ([efe9d5a](https://github.com/neet/masto.js/commit/efe9d5ac26cff9e3d05c921de42a5f81c6389251))
* Fix tsc error about Account ([38f848d](https://github.com/neet/masto.js/commit/38f848dff0bc6e168cc4cb34a702f40c68eec731))

## [4.1.9](https://github.com/neet/masto.js/compare/v4.1.8...v4.1.9) (2021-08-12)

## [4.1.8](https://github.com/neet/masto.js/compare/v4.1.7...v4.1.8) (2021-08-05)

## [4.1.7](https://github.com/neet/masto.js/compare/v4.1.6...v4.1.7) (2021-08-04)

## [4.1.6](https://github.com/neet/masto.js/compare/v4.1.5...v4.1.6) (2021-08-03)

## [4.1.5](https://github.com/neet/masto.js/compare/v4.1.4...v4.1.5) (2021-07-03)

## [4.1.4](https://github.com/neet/masto.js/compare/v4.1.3...v4.1.4) (2021-06-11)

## [4.1.3](https://github.com/neet/masto.js/compare/v4.1.2...v4.1.3) (2021-06-04)

## [4.1.2](https://github.com/neet/masto.js/compare/v4.1.1...v4.1.2) (2021-06-03)

## [4.1.1](https://github.com/neet/masto.js/compare/v4.1.0...v4.1.1) (2021-05-30)

# [4.1.0](https://github.com/neet/masto.js/compare/v4.0.4...v4.1.0) (2021-05-11)


### Features

* Add /api/v1/email/confirmations ([0f47ad2](https://github.com/neet/masto.js/commit/0f47ad292bb6fadceac9f01192ce722057ef3c80))
* Add details field for MastoError ([5a369f6](https://github.com/neet/masto.js/commit/5a369f6b6927a28c20beb915dae42d23af34d050))
* Add lookup API ([4e1f593](https://github.com/neet/masto.js/commit/4e1f5938c9dd41220bbcb83c70f54debf2139dce))
* Add policy to PushSubscriptionRepository#create ([eba850e](https://github.com/neet/masto.js/commit/eba850eba5bf580c50051bf31c787d9e8264b6a1))

## [4.0.4](https://github.com/neet/masto.js/compare/v4.0.3...v4.0.4) (2021-05-03)

## [4.0.3](https://github.com/neet/masto.js/compare/v4.0.2...v4.0.3) (2021-04-30)

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
