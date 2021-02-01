import {AuthorData} from './AuthorData';

export interface BookData {
  id: number;
  title: string;
  authors: Array<AuthorData>;
  subjects: Array<string>;
  bookShelves: Array<string>;
  copyright: boolean;
  mediaType: string;
  downloadLink: string;
  downloadCount: number;
}

export interface BookIndex {
  id: number;
}
