"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = require("query-string");
var Client = /** @class */ (function () {
    function Client() {
        var _this = this;
        this.url = '';
        this.urlVersion = '/api/v1';
        this.defaultHeaders = {};
        this._request = function (url, options) {
            if (options === void 0) { options = {}; }
            var requestOptions = __assign({}, options, { headers: __assign({}, _this.defaultHeaders, options.headers) });
            return fetch(url, requestOptions)
                .then(function (response) { return response.json(); }).then(function (data) { return data; })
                .catch(function (error) { return error.json(); }).then(function (error) { return error; });
        };
        this._get = function (path, params, options) {
            if (params === void 0) { params = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path + (params ? '?' + query_string_1.stringify(params) : ''), __assign({ method: 'GET' }, options));
        };
        this._post = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'POST', body: JSON.stringify(body) }, options));
        };
        this._put = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'PUT', body: JSON.stringify(body) }, options));
        };
        this._delete = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'DELETE', body: JSON.stringify(body) }, options));
        };
        this._patch = function (path, body, options) {
            if (body === void 0) { body = {}; }
            if (options === void 0) { options = {}; }
            return _this._request("" + _this.getBaseUrl() + path, __assign({ method: 'PATCH', body: JSON.stringify(body) }, options));
        };
        /**
         * Getting base url of API
         * @return Base url of API
         */
        this.getBaseUrl = function () { return "" + _this.url + _this.urlVersion; };
        /**
         * Setting URL of Mastodon that logged in without trailing slash
         * @param url URL of Mastodon
         */
        this.setUrl = function (url) {
            _this.url = url;
        };
        /**
         * Getting URL of Mastodon that logged in
         * @return The URL of current logged in Mastodon
         */
        this.getUrl = function () {
            return _this.url;
        };
        /**
         * Setting API version of Mastodon without trailing slash
         * @param urlVersion API version such as `/api/v1`
         */
        this.setUrlVersion = function (urlVersion) {
            _this.urlVersion = urlVersion;
        };
        /**
         * Getting API version of Mastodon
         * @return API version
         */
        this.getUrlVersion = function () {
            return _this.urlVersion;
        };
        /**
         * Setting token for OAuth
         * @param token OAuth token
         */
        this.setToken = function (token) {
            _this.defaultHeaders.Authorization = "Bearer: " + token;
        };
        /**
         * Fetching an account
         * @param id ID of the account
         * @return An account
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account)
         */
        this.fetchAccount = function (id) {
            return _this._get("/accounts/" + id);
        };
        /**
         * Getting the current user
         * @return The authenticated user's Account with an extra attribute source which contains these keys
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user)
         */
        this.verfiyCredentials = function () {
            return _this._get('/accounts/verify_credentials');
        };
        /**
         * Updating the current user
         * @param options Form data
         * @return The authenticated user's Account.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user)
         */
        this.updateCredentials = function (options) {
            return _this._patch('/accounts/update_credentials', options, { headers: { 'Content-Type': 'multipart/form-data' } });
        };
        /**
         * Getting an account's followers
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param id ID of the target account
         * @param options Query paramerters
         * @return An array of accounts
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers)
         */
        this.fetchAccountFollowers = function (id, options) {
            return _this._get("/accounts/" + id + "/followers", options);
        };
        /**
         * Getting who account is following
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param id ID of the target account
         * @param options Query parameters
         * @return An array of accounts
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following)
         */
        this.fetchAccountFollowing = function (id, options) {
            return _this._get("/accounts/" + id + "/following", options);
        };
        /**
         * Getting an account's statuses
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param id ID of the target account
         * @param options Query parameters
         * @return An array of statuses
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses)
         */
        this.fetchAccountStatuses = function (id, options) {
            return _this._get("/accounts/" + id + "/statuses", options);
        };
        /**
         * Following an account
         * @param id ID of the target account
         * @return The target account's relationship
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
         */
        this.followAccount = function (id) {
            return _this._post("/accounts/" + id + "/follow");
        };
        /**
         * Unfollowing an account
         * @param id ID of the target account
         * @return The target account's relationship
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
         */
        this.unfollowAccount = function (id) {
            return _this._post("/accounts/" + id + "/unfollow");
        };
        /**
         * Blocking an account
         * @param id ID of the target account
         * @return The target account's relationship
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
         */
        this.blockAccount = function (id) {
            return _this._post("/accounts/" + id + "/block");
        };
        /**
         * Unblocking an account
         * @param id ID of the target account
         * @return The target account's relationship
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
         */
        this.unblockAccount = function (id) {
            return _this._post("/accounts/" + id + "/unblock");
        };
        /**
         * Muting an account
         * @param id ID of the target account
         * @param notifications Determines whether the mute will mute notifications or not. Default(true)
         * @return The target account's relationship
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
         */
        this.muteAccount = function (id, notifications) {
            if (notifications === void 0) { notifications = true; }
            return _this._post("/accounts/" + id + "/mute", { notifications: notifications });
        };
        /**
         * Unmuting an account
         * @param id ID of the target account
         * @param notifications Determines whether the mute will mute notifications or not. Default(true)
         * @return The target account's relationship
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
         */
        this.ummuteAccount = function (id, notifications) {
            if (notifications === void 0) { notifications = true; }
            return _this._post("/accounts/" + id + "/ummute", { notifications: notifications });
        };
        /**
         * Getting an account's relationships
         * @param id Account IDs (can be an array)
         * @return An array of Relationships of the current user to a list of given accounts.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships)
         */
        this.fetchAccountRelationships = function (id) {
            return _this._get("/accounts/relationship", { id: id });
        };
        /**
         * Searching for accounts
         * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
         * @param q What to search for
         * @param options Query parameters
         * @return An array of matching accounts
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts)
         */
        this.searchAccounts = function (q, options) {
            return _this._get('/accounts/search', __assign({ q: q }, options));
        };
        /**
         * Registering an application
         * - These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
         * @param options From data
         * @return Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application)
         */
        this.createApp = function (options) {
            return _this._post('/apps', options);
        };
        /**
         * Fetching a user's blocks
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @return An array of accounts blocked by the atuhenticated user
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks)
         */
        this.fetchBlocks = function (options) {
            return _this._get('/blocks', options);
        };
        /**
         * Fetching a user's blocked domains
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @return An array of strings
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains)
         */
        this.fetchDomainBlocks = function (options) {
            return _this._get('/domain_blocks', options);
        };
        /**
         * Blocking a domain
         * @param domain Domain to block
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain)
         */
        this.blockDomain = function (domain) {
            return _this._post('/domain_blocks', { domain: domain });
        };
        /**
         * Unblocking a domain
         * @param domain Domain to unblock
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain)
         */
        this.unblockDomain = function (domain) {
            return _this._delete('/domain_blocks', { domain: domain });
        };
        /**
         * Fetching a user's favourites
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @return Return an array of Statuses favourited by the authenticated user
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites)
         */
        this.fetchFavouritedStatuses = function (options) {
            return _this._get('/favourites', options);
        };
        /**
         * Fetching a list of follow requests
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @return Returns an array of Accounts which have requested to follow the authenticated user.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests)
         */
        this.fetchFollowRequests = function (options) {
            return _this._get('/follow_requests', options);
        };
        /**
         * Authorizing follow requests
         * @param id ID of the target account
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
         */
        this.authorizeFollowRequest = function (id) {
            return _this._post("/follow_requests/" + id + "/authorize");
        };
        /**
         * Rejecting follow requests
         * @param id ID of the target account
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
         */
        this.rejectFollowRequest = function (id) {
            return _this._post("/follow_requests/" + id + "/reject");
        };
        /**
         * Following a remote user
         * @param uri `username@domain` of the person you want to follow
         * @return The local representation of the followed account, as an Account.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)
         */
        this.followAccountByUsername = function (uri) {
            return _this._post('/follows', { uri: uri });
        };
        /**
         * Getting current instance information
         * - Does not require authentication
         * @return The current instance.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information)
         */
        this.fetchInstance = function () {
            return _this._get('/instance');
        };
        /**
         * Getting current instance's custom emojis
         * - Does not require authentication
         * @return A list of Emoji
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis)
         */
        this.fetchCustomEmojis = function () {
            return _this._get('/custom_emojis');
        };
        /**
         * Retrieving lists
         * @return At most 50 Lists without pagination
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists)
         */
        this.fetchLists = function () {
            return _this._get('/lists');
        };
        /**
         * Retrieving lists by membership
         * @return At most 50 Lists without pagination
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership)
         */
        this.fetchListByMembership = function (id) {
            return _this._get("/lists/" + id + "/lists");
        };
        /**
         * Retrieving accounts in a list
         * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
         * @param id ID of the target list
         * @param limit Maximum number of accounts to get
         * @return Returns Accounts in the list.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list)
         */
        this.fetchAccountsInList = function (id, limit) {
            return _this._get("/list/" + id + "/accounts", { limit: limit });
        };
        /**
         * Retrieving a list
         * @param id ID of the targtet list
         * @return The specified List.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list)
         */
        this.fetchList = function (id) {
            return _this._get("/lists/" + id);
        };
        /**
         * Creating a list
         * @param title The title of the list
         * @return A new List.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
         */
        this.createList = function (title) {
            return _this._post('/lists', { title: title });
        };
        /**
         * Updating a list
         * @param id ID of the target list
         * @param title The title of the list
         * @return A updated List.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
         */
        this.updateList = function (id, title) {
            return _this._put("/lists/" + id, { title: title });
        };
        /**
         * Deleting a list
         * @param id ID of the target list
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list)
         */
        this.deleteList = function (id) {
            return _this._delete("/lists/" + id);
        };
        /**
         * Adding accounts to a list
         * - Note: Only accounts already followed by the authenticated user can be added to a list.
         * @param id ID of the target list
         * @param account_ids Array of account IDs
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
         */
        this.addAccountToList = function (id, account_ids) {
            return _this._post("/lists/" + id + "/accounts", { account_ids: account_ids });
        };
        /**
         * Removing accounts from a list
         * - Note: Only accounts already followed by the authenticated user can be added to a list.
         * @param id ID of the target list
         * @param account_ids Array of account IDs
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
         */
        this.removeAccountFromList = function (id, account_ids) {
            return _this._post("/lists/" + id + "/accounts", { account_ids: account_ids });
        };
        /**
         * Uploading a media attachment
         * @param file Media to be uploaded (encoded using `multipart/form-data`)
         * @param options Form data
         * @return An Attachment that can be used when creating a status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment)
         */
        this.uploadMediaAttachment = function (file, options) {
            return _this._post('/media', __assign({ file: file }, options), { headers: { 'Content-Type': 'multipart/form-data' } });
        };
        /**
         * Updating a media attachment
         * - Can only be done before the media is attached to a status
         * - Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
         * @param id ID of the target attachment
         * @param options Form data
         * @return Returns an Attachment that can be used when creating a status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment)
         */
        this.updateMediaAttachment = function (id, options) {
            return _this._put("/media/" + id, options);
        };
        /**
         * Fetching a user's mutes
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @return An array of Accounts muted by the authenticated user.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes)
         */
        this.fetchMutes = function (options) {
            return _this._get('/mutes', options);
        };
        /**
         * Fetching a user's notifications
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * @param options Query parameters
         * @return A list of Notifications for the authenticated user.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications)
         */
        this.fetchNotifications = function (options) {
            return _this._get('/notifications', options);
        };
        /**
         * Getting a single notification
         * @param id ID of the target user
         * @return The Notification.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification)
         */
        this.fetchNotification = function (id) {
            return _this._get("/notifications/" + id);
        };
        /**
         * Clearing notifications
         * - Deletes all notifications from the Mastodon server for the authenticated user.
         * @return Returns an empty object.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications)
         */
        this.clearNotifications = function () {
            return _this._post('/notifications/clear');
        };
        /**
         * Dismissing a single notification
         * - Deletes a single notification from the Mastodon server for the authenticated user.
         * @param id ID of the notification
         * @return Returns an empty object.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification)
         */
        this.dissmissNotification = function (id) {
            return _this._post("/notifications/dismiss", { id: id });
        };
        /**
         * Fetching a user's reports
         * - This method is not entirely implemented and contains no useful information at this point
         * @return Returns a list of Reports made by the authenticated user.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports)
         */
        this.fetchReports = function () {
            return _this._post('/reports');
        };
        /**
         * Reporting a user
         * @param options Form data
         * @return The finished Report
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user)
         */
        this.reportUser = function (options) {
            return _this._post('/reports', options);
        };
        /**
         * Searching for content
         * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
         * @param q The search query
         * @param resolve Whether to resolve non-local accounts (default: don't resolve)
         * @return Results
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content)
         */
        this.searchContent = function (q, resolve) {
            if (resolve === void 0) { resolve = false; }
            return _this._post('/search', { q: q, resolve: resolve });
        };
        /**
         * Fetching a status
         * - Does not require authentication.
         * @param id ID of the target status
         * @return A status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status)
         */
        this.fetchStatus = function (id) {
            return _this._get("/statuses/" + id);
        };
        /**
         * Getting status context
         * - Does not require authentication.
         * @param id ID of the target status
         * @return A Context.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context)
         */
        this.fetchStatusContext = function (id) {
            return _this._get("/statuses/" + id + "/context");
        };
        /**
         * Getting a card associated with a status
         * - Does not require authentication.
         * @return A Card.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status)
         */
        this.fetchStatusCard = function (id) {
            return _this._get("/statuses/" + id + "/card");
        };
        /**
         * Getting who reblogged a status
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * - Does not require authentication
         * @param id ID of target status
         * @param options Query parameters
         * @return An array of Accounts
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
         */
        this.fetchReblogs = function (id, options) {
            return _this._get("/statuses/" + id + "/reblogged_by", options);
        };
        /**
         * Getting who favourited a status
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
         * - Does not require authentication
         * @param id ID of target status
         * @param options Query parameters
         * @return An array of Accounts
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
         */
        this.fetchFavourites = function (id, options) {
            return _this._get("/statuses/" + id + "/favourited_by", options);
        };
        /**
         * Posting a new status
         * - Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See https://stripe.com/blog/idempotency for more on idempotency and idempotency keys.
         * @param status The text of the status
         * @param options Form data
         * @param idempotencyKey The Idempotency-Key of request header
         * @return The new Status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status)
         */
        this.createStatus = function (status, options, idempotencyKey) {
            if (idempotencyKey) {
                return _this._post('/statuses', __assign({ status: status }, options), { headers: { 'Idempotency-Key': idempotencyKey } });
            }
            return _this._post('/statuses', __assign({ status: status }, options));
        };
        /**
         * Deleting a status
         * @param id ID of the target status
         * @return An empty object
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status)
         */
        this.deleteStatus = function (id) {
            return _this._delete("/statuses/" + id);
        };
        /**
         * Reblogging a status
         * @param id ID of the target status
         * @return The reblog Status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
         */
        this.reblogStatus = function (id) {
            return _this._post("/statuses/" + id + "/reblog");
        };
        /**
         * Unreblogging a status
         * @param id ID of the target status
         * @return The target Status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
         */
        this.unreblogStatus = function (id) {
            return _this._post("/statuses/" + id + "/unreblog");
        };
        /**
         * Favouriting status
         * @param id ID of the target status
         * @return The target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
         */
        this.favouriteStatus = function (id) {
            return _this._post("/statuses/" + id + "/favourite");
        };
        /**
         * Unfavouriting status
         * @param id ID of the target status
         * @return The target status
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
         */
        this.unfavouriteStatus = function (id) {
            return _this._post("/statuses/" + id + "/unfavourite");
        };
        /**
         * Pinning a status
         * @param id ID of the target status
         * @return The target Status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
         */
        this.pinStatus = function (id) {
            return _this._post("/statuses/" + id + "/pin");
        };
        /**
         * Unpinning a status
         * @param id ID of the target status
         * @return The target Status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
         */
        this.unpinStatus = function (id) {
            return _this._post("/statuses/" + id + "/unpin");
        };
        /**
         * Muting a conversation of a status
         * @param id ID of the target status
         * @return The target Status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
         */
        this.muteStatus = function (id) {
            return _this._post("/statuses/" + id + "/mute");
        };
        /**
         * Unmuting a conversation of a status
         * @param id ID of the target status
         * @return The target Status.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
         */
        this.unmuteStatus = function (id) {
            return _this._post("/statuses/" + id + "/unmute");
        };
        /**
         * Retrieving a timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Public and tag timelines do not require authentication.
         * @param id ID of the timeline
         * @param options Query parameters
         * @return An array of Statuses, most recent ones first.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         */
        this.fetchTimeline = function (id, options) {
            return _this._get("/timelines/" + id, options);
        };
        /**
         * Retrieving the home timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * @param options Query parameters
         * @return An array of Statuses, most recent ones first.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         */
        this.fetchHomeTimeline = function (options) { return _this.fetchTimeline("/timeline/home", options); };
        /**
         * Retrieving the community timeline (aka "Local timeline" in the UI)
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Does not require authentication.
         * @param options Query parameters
         * @return An array of Statuses, most recent ones first.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         */
        this.fetchCommunityTimeline = function (options) { return _this.fetchTimeline("/timeline/public", __assign({ local: true }, options)); };
        /**
         * Retrieving the public timeline (aka "Federated timeline" in the UI)
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Does not require authentication.
         * @param options Query parameters
         * @return An array of Statuses, most recent ones first.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         */
        this.fetchPublicTimeline = function (options) { return _this.fetchTimeline("/timeline/public", options); };
        /**
         * Retrieving a tag timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * - Does not require authentication.
         * @param id ID of the hashtag
         * @param options Query parameters
         * @return An array of Statuses, most recent ones first.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         */
        this.fetchTagTimeline = function (id, options) { return _this.fetchTimeline("/timeline/tag/" + id, options); };
        /**
         * Retrieving a list timeline
         * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
         * @param id ID of the list
         * @param options Query parameters
         * @return An array of Statuses, most recent ones first.
         * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
         */
        this.fetchListTimeline = function (id, options) { return _this.fetchTimeline("/timeline/list/" + id, options); };
    }
    return Client;
}());
exports.Client = Client;
