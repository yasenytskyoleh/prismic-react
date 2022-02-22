import {AlternateLanguage} from '@prismicio/types';

export interface PrismicResponseDto<T> {
  readonly id: string;
  readonly uid: string | null;
  readonly url: string | null;
  readonly type: string;
  readonly href: string;
  readonly tags: string[];
  readonly first_publication_date: string;
  readonly last_publication_date: string;
  readonly slugs: string[];
  readonly linked_documents: unknown[];
  readonly lang: string;
  readonly alternate_languages: AlternateLanguage[];
  readonly data: T;
}
