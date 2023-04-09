import type {
  FilterRepository,
  InstanceRepository,
  MediaAttachmentRepository,
  SearchRepository,
  SuggestionRepository,
} from './repositories';

export interface Repository {
  readonly filters: FilterRepository;
  readonly instance: InstanceRepository;
  readonly media: MediaAttachmentRepository;
  readonly suggestions: SuggestionRepository;
  readonly search: SearchRepository;
}
