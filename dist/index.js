"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = require("eventemitter3");
var websocket_js_1 = require("websocket.js");
var query_string_1 = require("query-string");
var Mastodon = /** @class */ (function (_super) {
    __extends(Mastodon, _super);
    function Mastodon() {
        var _this = _super.call(this) || this;
        _this.url = '';
        _this.token = '';
        _this.urlVersion = '/api/v1';
        _this.streamingUrl = '';
        _this._request = function (url, options) {
            if (options === void 0) { options = {}; }
            options = __assign({}, options);
            options.headers = __assign({ Authorization: "Bearer: " + _this.token }, options.headers);
            return fetch(url, options)
                .then(function (response) { return response.json(); }).then(function (data) { return data; })
                .catch(function (error) { return error.json(); }).then(function (error) { return error; });
        };
        _this._get = function (path, params, options) {
            if (params === void 0) { params = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path + (params ? '?' + query_string_1.stringify(params) : ''), __assign({ method: 'GET' }, options));
        };
        _this._post = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'POST', body: JSON.stringify(body) }, options));
        };
        _this._put = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'PUT', body: JSON.stringify(body) }, options));
        };
        _this._delete = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'DELETE', body: JSON.stringify(body) }, options));
        };
        _this._patch = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'PATCH', body: JSON.stringify(body) }, options));
        };
        /**
         * Getting base url of API
         * @return Base url of API
         */
        _this.getBaseUrl = function () { return "" + _this.url + _this.urlVersion; };
        /**
         * Getting base url of streaming API
         * @return Base url of streaming API
         */
        _this.getStreamingBaseUrl = function () { return "" + _this.getStreamingUrl() + _this.getUrlVersion(); };
        /**
         * Setting URL of Mastodon that logged in without trailing slash
         * @param url URL of Mastodon
         */
        _this.setUrl = function (url) {
            _this.url = url;
        };
        /**
         * Getting URL of Mastodon that logged in
         * @return The URL of current logged in Mastodon
         */
        _this.getUrl = function () { return _this.url; };
        /**
         * Setting URL of Mastodon's streaming api that started with `wss://`
         * @param streamingUrl The streaming url
         */
        _this.setStreamingUrl = function (streamingUrl) {
            _this.streamingUrl = streamingUrl;
        };
        /**
         * Getting streaming URL
         * @return The streaming URL
         */
        _this.getStreamingUrl = function () { return _this.streamingUrl; };
        /**
         * Setting API version of Mastodon without trailing slash
         * @param urlVersion API version such as `/api/v1`
         */
        _this.setUrlVersion = function (urlVersion) {
            _this.urlVersion = urlVersion;
        };
        /**
         * Getting API version of Mastodon
         * @return API version
         */
        _this.getUrlVersion = function () { return _this.urlVersion; };
        /**
         * Setting token for OAuth
         * @param token Access token
         */
        _this.setToken = function (token) {
            _this.token = token;
        };
        /**
         * Getting token for OAuth
         * @return Access token
         */
        _this.getToken = function () { return _this.token; };
        /**
         * Starting streaming with specified channel
         * @param stream Type of channel
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)
         */
        _this.stream = function (stream) {
            var params = { stream: stream };
            if (_this.token) {
                params.access_token = _this.token;
            }
            var ws = new websocket_js_1.default(_this.getStreamingBaseUrl() + "/streaming?" + query_string_1.stringify(params));
            ws.onmessage = function (e) { return _this.emit(e.type, JSON.parse(e.data)); };
            return ws;
        };
        /**
         * Fetching an account
         * @param id ID of the account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account)
         * @return An account
         */
        _this.fetchAccount = function (id) {
            return _this._get("/accounts/" + id);
        };
        /**
         * Getting the current user
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user)
         * @return The authenticated user's Account with an extra attribute source which contains these keys
         */
        _this.verfiyCredentials = function () {
            return _this._get('/accounts/verify_credentials');
        };
        /**
         * Updating the current user
         * @param options Form data
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user)
         * @return The authenticated user's Account.
         */
        _this.updateCredentials = function (options) {
            return _this._patch('/accounts/update_credentials', options, { headers: { 'Content-Type': 'multipart/form-data' } });
        };
        /**
         * Getting an account's followers
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param id ID of the target account
         * @param options Query paramerters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers)
         * @return An array of accounts
         */
        _this.fetchAccountFollowers = function (id, options) {
            return _this._get("/accounts/" + id + "/followers", options);
        };
        /**
         * Getting who account is following
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param id ID of the target account
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following)
         * @return An array of accounts
         */
        _this.fetchAccountFollowing = function (id, options) {
            return _this._get("/accounts/" + id + "/following", options);
        };
        /**
         * Getting an account's statuses
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param id ID of the target account
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses)
         * @return An array of statuses
         */
        _this.fetchAccountStatuses = function (id, options) {
            return _this._get("/accounts/" + id + "/statuses", options);
        };
        /**
         * Following an account
         * @param id ID of the target account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
         * @return The target account's relationship
         */
        _this.followAccount = function (id) {
            return _this._post("/accounts/" + id + "/follow");
        };
        /**
         * Unfollowing an account
         * @param id ID of the target account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
         * @return The target account's relationship
         */
        _this.unfollowAccount = function (id) {
            return _this._post("/accounts/" + id + "/unfollow");
        };
        /**
         * Blocking an account
         * @param id ID of the target account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
         * @return The target account's relationship
         */
        _this.blockAccount = function (id) {
            return _this._post("/accounts/" + id + "/block");
        };
        /**
         * Unblocking an account
         * @param id ID of the target account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
         * @return The target account's relationship
         */
        _this.unblockAccount = function (id) {
            return _this._post("/accounts/" + id + "/unblock");
        };
        /**
         * Muting an account
         * @param id ID of the target account
         * @param notifications Determines whether the mute will mute notifications or not. Default(true)
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
         * @return The target account's relationship
         */
        _this.muteAccount = function (id, notifications) {
            if (notifications === void 0) { notifications = true; }
            return _this._post("/accounts/" + id + "/mute", { notifications: notifications });
        };
        /**
         * Unmuting an account
         * @param id ID of the target account
         * @param notifications Determines whether the mute will mute notifications or not. Default(true)
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
         * @return The target account's relationship
         */
        _this.ummuteAccount = function (id, notifications) {
            if (notifications === void 0) { notifications = true; }
            return _this._post("/accounts/" + id + "/ummute", { notifications: notifications });
        };
        /**
         * Getting an account's relationships
         * @param id Account IDs (can be an array)
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships)
         * @return An array of Relationships of the current user to a list of given accounts.
         */
        _this.fetchAccountRelationships = function (id) {
            return _this._get("/accounts/relationship", { id: id });
        };
        /**
         * Searching for accounts
         * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
         * @param q What to search for
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts)
         * @return An array of matching accounts
         */
        _this.searchAccounts = function (q, options) {
            return _this._get('/accounts/search', __assign({ q: q }, options));
        };
        /**
         * Registering an application
         * - These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
         * @param client_name Name of your application
         * @param redirect_uris Where the user should be redirected after authorization (for no redirect, use `urn:ietf:wg:oauth:2.0:oob`)
         * @param scopes This can be a space-separated list of the following items: "read", "write" and "follow" (see this page for details on what the scopes do)
         * @param website URL to the homepage of your app
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application)
         * @return Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.
         */
        _this.createApp = function (client_name, redirect_uris, scopes, website) {
            return _this._post('/apps', { client_name: client_name, redirect_uris: redirect_uris, scopes: scopes, website: website });
        };
        /**
         * Fetching a user's blocks
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks)
         * @return An array of accounts blocked by the atuhenticated user
         */
        _this.fetchBlocks = function (options) {
            return _this._get('/blocks', options);
        };
        /**
         * Fetching a user's blocked domains
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains)
         * @return An array of strings
         */
        _this.fetchDomainBlocks = function (options) {
            return _this._get('/domain_blocks', options);
        };
        /**
         * Blocking a domain
         * @param domain Domain to block
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain)
         * @return An empty object
         */
        _this.blockDomain = function (domain) {
            return _this._post('/domain_blocks', { domain: domain });
        };
        /**
         * Unblocking a domain
         * @param domain Domain to unblock
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain)
         * @return An empty object
         */
        _this.unblockDomain = function (domain) {
            return _this._delete('/domain_blocks', { domain: domain });
        };
        /**
         * Fetching a user's favourites
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites)
         * @return Return an array of Statuses favourited by the authenticated user
         */
        _this.fetchFavouritedStatuses = function (options) {
            return _this._get('/favourites', options);
        };
        /**
         * Fetching a list of follow requests
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests)
         * @return Returns an array of Accounts which have requested to follow the authenticated user.
         */
        _this.fetchFollowRequests = function (options) {
            return _this._get('/follow_requests', options);
        };
        /**
         * Authorizing follow requests
         * @param id ID of the target account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
         * @return An empty object
         */
        _this.authorizeFollowRequest = function (id) {
            return _this._post("/follow_requests/" + id + "/authorize");
        };
        /**
         * Rejecting follow requests
         * @param id ID of the target account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
         * @return An empty object
         */
        _this.rejectFollowRequest = function (id) {
            return _this._post("/follow_requests/" + id + "/reject");
        };
        /**
         * Following a remote user
         * @param uri `username@domain` of the person you want to follow
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)
         * @return The local representation of the followed account, as an Account.
         */
        _this.followAccountByUsername = function (uri) {
            return _this._post('/follows', { uri: uri });
        };
        /**
         * Getting current instance information
         * - Does not require authentication
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information)
         * @return The current instance.
         */
        _this.fetchInstance = function () {
            return _this._get('/instance');
        };
        /**
         * Getting current instance's custom emojis
         * - Does not require authentication
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis)
         * @return A list of Emoji
         */
        _this.fetchCustomEmojis = function () {
            return _this._get('/custom_emojis');
        };
        /**
         * Retrieving lists
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists)
         * @return At most 50 Lists without pagination
         */
        _this.fetchLists = function () {
            return _this._get('/lists');
        };
        /**
         * Retrieving lists by membership
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership)
         * @return At most 50 Lists without pagination
         */
        _this.fetchListByMembership = function (id) {
            return _this._get("/lists/" + id + "/lists");
        };
        /**
         * Retrieving accounts in a list
         * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
         * @param id ID of the target list
         * @param limit Maximum number of accounts to get
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list)
         * @return Returns Accounts in the list.
         */
        _this.fetchAccountsInList = function (id, limit) {
            return _this._get("/list/" + id + "/accounts", { limit: limit });
        };
        /**
         * Retrieving a list
         * @param id ID of the targtet list
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list)
         * @return The specified List.
         */
        _this.fetchList = function (id) {
            return _this._get("/lists/" + id);
        };
        /**
         * Creating a list
         * @param title The title of the list
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
         * @return A new List.
         */
        _this.createList = function (title) {
            return _this._post('/lists', { title: title });
        };
        /**
         * Updating a list
         * @param id ID of the target list
         * @param title The title of the list
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
         * @return A updated List.
         */
        _this.updateList = function (id, title) {
            return _this._put("/lists/" + id, { title: title });
        };
        /**
         * Deleting a list
         * @param id ID of the target list
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list)
         * @return An empty object
         */
        _this.deleteList = function (id) {
            return _this._delete("/lists/" + id);
        };
        /**
         * Adding accounts to a list
         * - Note: Only accounts already followed by the authenticated user can be added to a list.
         * @param id ID of the target list
         * @param account_ids Array of account IDs
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
         * @return An empty object
         */
        _this.addAccountToList = function (id, account_ids) {
            return _this._post("/lists/" + id + "/accounts", { account_ids: account_ids });
        };
        /**
         * Removing accounts from a list
         * - Note: Only accounts already followed by the authenticated user can be added to a list.
         * @param id ID of the target list
         * @param account_ids Array of account IDs
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
         * @return An empty object
         */
        _this.removeAccountFromList = function (id, account_ids) {
            return _this._post("/lists/" + id + "/accounts", { account_ids: account_ids });
        };
        /**
         * Uploading a media attachment
         * @param file Media to be uploaded (encoded using `multipart/form-data`)
         * @param options Form data
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment)
         * @return An Attachment that can be used when creating a status.
         */
        _this.uploadMediaAttachment = function (file, options) {
            return _this._post('/media', __assign({ file: file }, options), { headers: { 'Content-Type': 'multipart/form-data' } });
        };
        /**
         * Updating a media attachment
         * - Can only be done before the media is attached to a status
         * - Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
         * @param id ID of the target attachment
         * @param options Form data
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment)
         * @return Returns an Attachment that can be used when creating a status.
         */
        _this.updateMediaAttachment = function (id, options) {
            return _this._put("/media/" + id, options);
        };
        /**
         * Fetching a user's mutes
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes)
         * @return An array of Accounts muted by the authenticated user.
         */
        _this.fetchMutes = function (options) {
            return _this._get('/mutes', options);
        };
        /**
         * Fetching a user's notifications
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications)
         * @return A list of Notifications for the authenticated user.
         */
        _this.fetchNotifications = function (options) {
            return _this._get('/notifications', options);
        };
        /**
         * Getting a single notification
         * @param id ID of the target user
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification)
         * @return The Notification.
         */
        _this.fetchNotification = function (id) {
            return _this._get("/notifications/" + id);
        };
        /**
         * Clearing notifications
         * - Deletes all notifications from the Mastodon server for the authenticated user.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications)
         * @return Returns an empty object.
         */
        _this.clearNotifications = function () {
            return _this._post('/notifications/clear');
        };
        /**
         * Dismissing a single notification
         * - Deletes a single notification from the Mastodon server for the authenticated user.
         * @param id ID of the notification
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification)
         * @return Returns an empty object.
         */
        _this.dissmissNotification = function (id) {
            return _this._post("/notifications/dismiss", { id: id });
        };
        /**
         * Fetching a user's reports
         * - This method is not entirely implemented and contains no useful information at this point
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports)
         * @return Returns a list of Reports made by the authenticated user.
         */
        _this.fetchReports = function () {
            return _this._post('/reports');
        };
        /**
         * Reporting a user
         * @param account_id The ID of the account to report
         * @param status_ids The IDs of statuses to report (can be an array)
         * @param comment A comment to associate with the report (up to 1000 characters)
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user)
         * @return The finished Report
         */
        _this.reportUser = function (account_id, status_ids, comment) {
            return _this._post('/reports', { account_id: account_id, status_ids: status_ids, comment: comment });
        };
        /**
         * Searching for content
         * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
         * @param q The search query
         * @param resolve Whether to resolve non-local accounts (default: don't resolve)
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content)
         * @return Results
         */
        _this.searchContent = function (q, resolve) {
            if (resolve === void 0) { resolve = false; }
            return _this._post('/search', { q: q, resolve: resolve });
        };
        /**
         * Fetching a status
         * - Does not require authentication.
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status)
         * @return A status
         */
        _this.fetchStatus = function (id) {
            return _this._get("/statuses/" + id);
        };
        /**
         * Getting status context
         * - Does not require authentication.
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context)
         * @return A Context.
         */
        _this.fetchStatusContext = function (id) {
            return _this._get("/statuses/" + id + "/context");
        };
        /**
         * Getting a card associated with a status
         * - Does not require authentication.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status)
         * @return A Card.
         */
        _this.fetchStatusCard = function (id) {
            return _this._get("/statuses/" + id + "/card");
        };
        /**
         * Getting who reblogged a status
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * - Does not require authentication
         * @param id ID of target status
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
         * @return An array of Accounts
         */
        _this.fetchReblogs = function (id, options) {
            return _this._get("/statuses/" + id + "/reblogged_by", options);
        };
        /**
         * Getting who favourited a status
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * - Does not require authentication
         * @param id ID of target status
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
         * @return An array of Accounts
         */
        _this.fetchFavourites = function (id, options) {
            return _this._get("/statuses/" + id + "/favourited_by", options);
        };
        /**
         * Posting a new status
         * - Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See https://stripe.com/blog/idempotency for more on idempotency and idempotency keys.
         * @param status The text of the status
         * @param options Form data
         * @param idempotencyKey The Idempotency-Key of request header
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status)
         * @return The new Status
         */
        _this.createStatus = function (status, options, idempotencyKey) {
            if (idempotencyKey) {
                return _this._post('/statuses', __assign({ status: status }, options), { headers: { 'Idempotency-Key': idempotencyKey } });
            }
            return _this._post('/statuses', __assign({ status: status }, options));
        };
        /**
         * Deleting a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status)
         * @return An empty object
         */
        _this.deleteStatus = function (id) {
            return _this._delete("/statuses/" + id);
        };
        /**
         * Reblogging a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
         * @return The reblog Status.
         */
        _this.reblogStatus = function (id) {
            return _this._post("/statuses/" + id + "/reblog");
        };
        /**
         * Unreblogging a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
         * @return The target Status.
         */
        _this.unreblogStatus = function (id) {
            return _this._post("/statuses/" + id + "/unreblog");
        };
        /**
         * Favouriting status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
         * @return The target status
         */
        _this.favouriteStatus = function (id) {
            return _this._post("/statuses/" + id + "/favourite");
        };
        /**
         * Unfavouriting status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
         * @return The target status
         */
        _this.unfavouriteStatus = function (id) {
            return _this._post("/statuses/" + id + "/unfavourite");
        };
        /**
         * Pinning a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
         * @return The target Status.
         */
        _this.pinStatus = function (id) {
            return _this._post("/statuses/" + id + "/pin");
        };
        /**
         * Unpinning a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
         * @return The target Status.
         */
        _this.unpinStatus = function (id) {
            return _this._post("/statuses/" + id + "/unpin");
        };
        /**
         * Muting a conversation of a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
         * @return The target Status.
         */
        _this.muteStatus = function (id) {
            return _this._post("/statuses/" + id + "/mute");
        };
        /**
         * Unmuting a conversation of a status
         * @param id ID of the target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
         * @return The target Status.
         */
        _this.unmuteStatus = function (id) {
            return _this._post("/statuses/" + id + "/unmute");
        };
        /**
         * Retrieving a timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Public and tag timelines do not require authentication.
         * @param id ID of the timeline
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         * @return An array of Statuses, most recent ones first.
         */
        _this.fetchTimeline = function (id, options) {
            return _this._get("/timelines/" + id, options);
        };
        /**
         * Retrieving the home timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         * @return An array of Statuses, most recent ones first.
         */
        _this.fetchHomeTimeline = function (options) { return _this.fetchTimeline("/timeline/home", options); };
        /**
         * Retrieving the community timeline (aka "Local timeline" in the UI)
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Does not require authentication.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         * @return An array of Statuses, most recent ones first.
         */
        _this.fetchCommunityTimeline = function (options) { return _this.fetchTimeline("/timeline/public", __assign({ local: true }, options)); };
        /**
         * Retrieving the public timeline (aka "Federated timeline" in the UI)
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Does not require authentication.
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         * @return An array of Statuses, most recent ones first.
         */
        _this.fetchPublicTimeline = function (options) { return _this.fetchTimeline("/timeline/public", options); };
        /**
         * Retrieving a tag timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Does not require authentication.
         * @param id ID of the hashtag
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         * @return An array of Statuses, most recent ones first.
         */
        _this.fetchTagTimeline = function (id, options) { return _this.fetchTimeline("/timeline/tag/" + id, options); };
        /**
         * Retrieving a list timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * @param id ID of the list
         * @param options Query parameters
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         * @return An array of Statuses, most recent ones first.
         */
        _this.fetchListTimeline = function (id, options) { return _this.fetchTimeline("/timeline/list/" + id, options); };
        return _this;
    }
    /**
     * Add event listener for specified Event
     * @param event Type of event `update`, `delete` or `notification`.
     * @param listener Callback function
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)
     */
    Mastodon.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    return Mastodon;
}(eventemitter3_1.default));
exports.Mastodon = Mastodon;
