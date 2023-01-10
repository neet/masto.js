# [5.2.0](https://github.com/neet/masto.js/compare/v5.1.3...v5.2.0) (2023-01-10)


### Bug Fixes

* Add missing filters.createStatus ([6a0586a](https://github.com/neet/masto.js/commit/6a0586a473eac0ab23925759ed9b3d4db569c539))
* Clear timeout regardless response status ([7b4e170](https://github.com/neet/masto.js/commit/7b4e1709352f60592ed74e4138cd3b4afa2461b5))
* FilterResult type ([d85a8e5](https://github.com/neet/masto.js/commit/d85a8e5f83ba203d74a7d044d1cea613dc64dcdb))
* Fix typo on listKeywords ([eb82682](https://github.com/neet/masto.js/commit/eb82682a1bf5cfb08fdcdc6fff92cc180094e6dc))
* Fix v2.filters.updateKeyword URL ([144435c](https://github.com/neet/masto.js/commit/144435c959745853f9c648340c0a6c8e9e0fa7bc))
* v2 instance api version ([3a491e4](https://github.com/neet/masto.js/commit/3a491e486a525a0eaaca457774ba5ded2f2b8e56))


### Features

* add clone for Paginator ([0c74998](https://github.com/neet/masto.js/commit/0c749983f5d4664582981fbe18d633f861b1e314))
* Add missing filter features ([a839b03](https://github.com/neet/masto.js/commit/a839b030f358fe401e8b376e5d253b4cd0f1b3fd))

## [5.1.3](https://github.com/neet/masto.js/compare/v5.1.2...v5.1.3) (2023-01-09)


### Bug Fixes

* allow omitting one timeline when creating marker ([ca1070c](https://github.com/neet/masto.js/commit/ca1070c4dfd291585e3ba37275061ab069f0d211))

## [5.1.2](https://github.com/neet/masto.js/compare/v5.1.1...v5.1.2) (2023-01-08)


### Bug Fixes

* update `moved` field type of Account ([1fa6546](https://github.com/neet/masto.js/commit/1fa6546cad14519cfbe251a5c8687e5845e5bfc3))

## [5.1.1](https://github.com/neet/masto.js/compare/v5.1.0...v5.1.1) (2023-01-05)


### Bug Fixes

* Change searchParams type to Record ([2ae64ed](https://github.com/neet/masto.js/commit/2ae64ed14044cb08eb69e5ec5f9e52e54c7d7f62)), closes [#672](https://github.com/neet/masto.js/issues/672)

# [5.1.0](https://github.com/neet/masto.js/compare/v5.0.5...v5.1.0) (2023-01-01)


### Features

* Support admin dashboard API ([#778](https://github.com/neet/masto.js/issues/778)) ([c1f2dfa](https://github.com/neet/masto.js/commit/c1f2dfa555a60ed423194b2b09ff944311d72b9c))

## [5.0.5](https://github.com/neet/masto.js/compare/v5.0.4...v5.0.5) (2022-12-26)

## [5.0.4](https://github.com/neet/masto.js/compare/v5.0.3...v5.0.4) (2022-12-25)


### Bug Fixes

* Node.js < 18 media uploading ([987dac7](https://github.com/neet/masto.js/commit/987dac729e6bda7dee942773f9a34ca4da835800))

## [5.0.3](https://github.com/neet/masto.js/compare/v5.0.2...v5.0.3) (2022-12-25)


### Bug Fixes

* Add default filename only when field value is a blob ([fd6d3fb](https://github.com/neet/masto.js/commit/fd6d3fb5f18667048afa708ca2ec684308a8f89f))
* Clear timeout when request completed ([f6b2f9c](https://github.com/neet/masto.js/commit/f6b2f9ce9cd406bc9f90fad57c7d86fbbe2243c8))

## [5.0.2](https://github.com/neet/masto.js/compare/v5.0.1...v5.0.2) (2022-12-25)


### Bug Fixes

* Add default filename for form-data ([9a7489f](https://github.com/neet/masto.js/commit/9a7489fae14e2b8b363600252da8aa4d2a764a0c))
* Change return type of Paginator#next to Promise ([3399892](https://github.com/neet/masto.js/commit/3399892aa888428db9476730e42489b3f7ba6392))
* Fix MastoTimeoutError to be thrown instead of AbortError ([8de20a4](https://github.com/neet/masto.js/commit/8de20a4284ee800747c82e1033ea482662b58a22))
* Update target to ES6 ([3a3acec](https://github.com/neet/masto.js/commit/3a3acecb0ad258569d07f78e8e3ff432c61030a1))

## [5.0.1](https://github.com/neet/masto.js/compare/v5.0.0...v5.0.1) (2022-12-24)

# [5.0.0](https://github.com/neet/masto.js/compare/v4.11.1...v5.0.0) (2022-12-23)


### Bug Fixes

* Fix `instanceof` operator for error classes ([7893b4d](https://github.com/neet/masto.js/commit/7893b4d9d7128295ee81582ab12194085c4dfad9))
* Fix broken test for paginator ([584d1dc](https://github.com/neet/masto.js/commit/584d1dc77e6a8d6bc5930c4e35fa455538829152))
* Fix http-native-impl to use getContentType ([875c371](https://github.com/neet/masto.js/commit/875c371d24fad4f0f8ae872153a1b2b4ef080049))
* Fix setupFilesAfterEnv to include isomorphic-fetch ([2fd41e3](https://github.com/neet/masto.js/commit/2fd41e3c744b7eef9a865d97308306b2f8ce7719))
* Fix tests ([58ba2c7](https://github.com/neet/masto.js/commit/58ba2c755551028b9544ab470245eb9ac8fd3f5e))
* Fix tsc errors in domain blocks ([4f8700e](https://github.com/neet/masto.js/commit/4f8700ed4809a904887cb68db866cb801a76da1b))
* Fix v2 search path ([b3d95f8](https://github.com/neet/masto.js/commit/b3d95f87ed261ddce68d5906bcd67bab2adcfb32))
* Remove "DOM" from TypeScript lib dependency ([61a9467](https://github.com/neet/masto.js/commit/61a946750ee9c074abce7c29f15b9972bc657456))
* Remove Array constraint from IRepository ([ced6608](https://github.com/neet/masto.js/commit/ced6608e02cd33e7469c8f60cb13a84f03d37312))
* Remove MimeType and change it to string ([129a17a](https://github.com/neet/masto.js/commit/129a17af7d860930e270a07bc902d2293b8f0bbf))
* Rename methods that returns an array to start with `list` ([68e8ff9](https://github.com/neet/masto.js/commit/68e8ff90dd9749d45364e1a30da5d86e0b20a6c7))
* Repository#delete -> Repository#remove ([b4e06a5](https://github.com/neet/masto.js/commit/b4e06a5ef4ee44a21c21de6cc709c7ec531dbc83))
* Update resource name to comply with the current Mastodon document ([6a20ad9](https://github.com/neet/masto.js/commit/6a20ad91b5b011d1368bf24cba2513ee08322f30))
* Use version check as error handling ([d24ab9a](https://github.com/neet/masto.js/commit/d24ab9ae0e18db4b583e0613ab4baf5b18f566ae))


### Features

* Add explicit API versions to methods ([d4dd3fa](https://github.com/neet/masto.js/commit/d4dd3fae008ca7335612c7ec3054d8421938bde9))
* Add logging interface ([bedc623](https://github.com/neet/masto.js/commit/bedc62300cac03d5ebf2a728a5a606629aa26b21))
* Drop Axios support ([903c09d](https://github.com/neet/masto.js/commit/903c09d82966b278549d0939af5a76ad16c836ef))
* Move entities and repositories under the namespace ([5da5773](https://github.com/neet/masto.js/commit/5da57738fb56f1c9528799158c628fc0c74bdf3b))
* Remove deprecated class aliases ([17582c1](https://github.com/neet/masto.js/commit/17582c1d5c60fea922f55bab11363cca9349d9e1))
* Remove next() argument ([5370e0c](https://github.com/neet/masto.js/commit/5370e0cf12c11fb696d65a8ceb93dd287882ac8a))


### BREAKING CHANGES

* Outdated resource names are updated with the current Mastodon document. Including `WebPushSubscription`, `CustomEmoji`, `AccountField`, etc
* You have to import `mastodon` to use any entity instead of importing single entity directly
* Paginator#next no longer accepts an argument. Please recreate Paginator if you want to reset the internal state
* fetchAll, fetchMany and other methods that returns an array is now prefixed with list*
* Alias for iteration methods and error classes are now removed
* All API calls now require masto.v1 or masto.v2 as a prefix.
* headers option for login() now should be a WHATWG object. Proxy support is also dropped.

## [4.11.1](https://github.com/neet/masto.js/compare/v4.11.0...v4.11.1) (2022-12-22)


### Bug Fixes

* Change HTTP methods to uppercase ([873a8e2](https://github.com/neet/masto.js/commit/873a8e2dd53ac8fb104facc651c6ae6c687a8384))

# [4.11.0](https://github.com/neet/masto.js/compare/v4.10.2...v4.11.0) (2022-12-20)


### Bug Fixes

* Add backwards-compatible type declarations ([#761](https://github.com/neet/masto.js/issues/761)) ([e957388](https://github.com/neet/masto.js/commit/e9573884f70013e1598f27dcb65cb181006e5ca6))
* Add missing exclude_reblogs and tagged to fetching account statuses ([#760](https://github.com/neet/masto.js/issues/760)) ([59cd02a](https://github.com/neet/masto.js/commit/59cd02abd65d0afbda3a3fa3f544ae13e6b2f155))


### Features

* Support Canonical email block ([#759](https://github.com/neet/masto.js/issues/759)) ([464f4fe](https://github.com/neet/masto.js/commit/464f4fe5898cfafda9c58c0b26cbbc31a2c24b39))

## [4.10.2](https://github.com/neet/masto.js/compare/v4.10.1...v4.10.2) (2022-12-19)


### Bug Fixes

* Change Content-Type to undefined when body is a FormData ([6edac35](https://github.com/neet/masto.js/commit/6edac351b981e98cff727a6855cbddd0f310c893))

## [4.10.1](https://github.com/neet/masto.js/compare/v4.10.0...v4.10.1) (2022-12-18)

# [4.10.0](https://github.com/neet/masto.js/compare/v4.9.2...v4.10.0) (2022-12-15)


### Bug Fixes

* Remove JSON.parse for delete event type ([#754](https://github.com/neet/masto.js/issues/754)) ([b5cb960](https://github.com/neet/masto.js/commit/b5cb96061786de902788f79a5cea7d0555a32b3e))


### Features

* Support /v1/admin/ip_blocks ([#752](https://github.com/neet/masto.js/issues/752)) ([89e0098](https://github.com/neet/masto.js/commit/89e00985885669e663d2d5461bf44e470827a6e9))

## [4.9.2](https://github.com/neet/masto.js/compare/v4.9.1...v4.9.2) (2022-12-14)


### Bug Fixes

* Remove re-exports of HTTP implementations ([#753](https://github.com/neet/masto.js/issues/753)) ([bafb4cb](https://github.com/neet/masto.js/commit/bafb4cbc57a60ef379a1a30e5f1fb184bdc71c7b))

## [4.9.1](https://github.com/neet/masto.js/compare/v4.9.0...v4.9.1) (2022-12-09)


### Bug Fixes

* Fix wrong types on fetch instance information ([#747](https://github.com/neet/masto.js/issues/747)) ([3657eae](https://github.com/neet/masto.js/commit/3657eaeb6519d64ac0b38f73430cd47231c12eda))

# [4.9.0](https://github.com/neet/masto.js/compare/v4.8.0...v4.9.0) (2022-12-06)


### Features

* Support /api/v1/admin/email_domain_blocks ([#746](https://github.com/neet/masto.js/issues/746)) ([785b617](https://github.com/neet/masto.js/commit/785b617f5d97d7da89769345a7fd4851c3079029))

# [4.8.0](https://github.com/neet/masto.js/compare/v4.7.5...v4.8.0) (2022-12-05)


### Bug Fixes

* Fix Card.{width,height} to be number ([#745](https://github.com/neet/masto.js/issues/745)) ([8941096](https://github.com/neet/masto.js/commit/8941096fe37fd818f836500628d48e43883d3dad)), closes [#737](https://github.com/neet/masto.js/issues/737)
* Fix CreatePushSubscriptionParams#policy to be on the root and required ([80ee853](https://github.com/neet/masto.js/commit/80ee85302871e4f4404d0dc277998f055f848c0d))
* Fix domain blocks to follow the naming convention ([ab8191b](https://github.com/neet/masto.js/commit/ab8191bfa5e6b0f8396f1eb4627fd1f9cb69030d))


### Features

* Support /api/v1/admin/domain_allows ([#744](https://github.com/neet/masto.js/issues/744)) ([dbdf59f](https://github.com/neet/masto.js/commit/dbdf59f9e0a823675a5f4064d663740886e69587))
* Support `/api/v1/admin/domain_blocks` ([#741](https://github.com/neet/masto.js/issues/741)) ([005e749](https://github.com/neet/masto.js/commit/005e749ea62d64ba069ebb2168b9895d3c9e695d))

## [4.7.5](https://github.com/neet/masto.js/compare/v4.7.4...v4.7.5) (2022-12-04)


### Bug Fixes

* Add FilterResult interface and Status.filtered optional prop ([581d4f9](https://github.com/neet/masto.js/commit/581d4f9a8936c5826afb5f5f82b45869919bd629)), closes [#737](https://github.com/neet/masto.js/issues/737)
* Add missing filterAction ([021a332](https://github.com/neet/masto.js/commit/021a3324f5bdca9b84036eb311bbe26fba0c6c68))

## [4.7.4](https://github.com/neet/masto.js/compare/v4.7.3...v4.7.4) (2022-12-03)


### Bug Fixes

* Fix the type of Filter.wholeWorld to boolean ([#726](https://github.com/neet/masto.js/issues/726)) ([525f4e5](https://github.com/neet/masto.js/commit/525f4e5eee0c0c7e4ee84a88ede6b6dc76759ddb))

## [4.7.3](https://github.com/neet/masto.js/compare/v4.7.2...v4.7.3) (2022-12-02)


### Bug Fixes

* Use builtin Object.fromEntries ([6a64264](https://github.com/neet/masto.js/commit/6a642646ee6f961affa74e6ceff18f3744092b6c))

## [4.7.2](https://github.com/neet/masto.js/compare/v4.7.1...v4.7.2) (2022-12-01)

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
