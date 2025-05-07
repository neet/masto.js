import type * as v1 from "./v1/index.js";
import type * as v2 from "./v2/index.js";

export interface V2Resource {
  filters: v2.FiltersResource;
  instance: v2.InstanceResource;
  media: v2.MediaAttachmentsResource;
  notifications: v2.NotificationsResource;
  suggestions: v2.SuggestionsResource;
  search: v2.SearchResource;
}

export interface V1Resource {
  admin: v1.AdminResource;
  accounts: v1.AccountsResource;
  announcements: v1.AnnouncementsResource;
  apps: v1.AppsResource;
  blocks: v1.BlocksResource;
  bookmarks: v1.BookmarksResource;
  conversations: v1.ConversationsResource;
  customEmojis: v1.CustomEmojisResource;
  directory: v1.DirectoryResource;
  domainBlocks: v1.DomainBlocksResource;
  endorsements: v1.EndorsementsResource;
  favourites: v1.FavouritesResource;
  featuredTags: v1.FeaturedTagsResource;
  filters: v1.FiltersResource;
  followRequests: v1.FollowRequestsResource;
  instance: v1.InstanceResource;
  lists: v1.ListsResource;
  markers: v1.MarkersResource;
  media: v1.MediaAttachmentsResource;
  mutes: v1.MuteResource;
  notifications: v1.NotificationsResource;
  polls: v1.PollsResource;
  preferences: v1.PreferencesResource;
  reports: v1.ReportsResource;
  scheduledStatuses: v1.ScheduledStatusesResource;
  search: v1.SearchResource;
  statuses: v1.StatusesResource;
  suggestions: v1.SuggestionsResource;
  timelines: v1.TimelinesResource;
  trends: v1.TrendsResource;
  emails: v1.EmailsResource;
  tags: v1.TagsResource;
  followedTags: v1.FollowedTagsResource;
  push: v1.PushResource;
  profile: v1.ProfileResource;
}

export interface Client {
  v1: V1Resource;
  v2: V2Resource;
}
