import {BookData} from '../../BookData';

export interface SearchResponse {
  searchResponses: Array<SearchResponseEntry>;
  suggestions: Array<BookData>;
}

export interface SearchResponseEntry {
  hash: string;
  book: BookData;
  words: Array<WordOccurrence>;
  accuracy: number;
}

export interface WordOccurrence {
  word: string;
  occurrence: number;
}
