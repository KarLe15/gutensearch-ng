import {BookData} from '../../BookData';

export interface BookResponse {
  book: BookData;
  suggestions: Array<BookData>;
}
