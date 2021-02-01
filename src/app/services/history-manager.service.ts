import { Injectable } from '@angular/core';
import {BookIndex} from '../models/BookData';

@Injectable({
  providedIn: 'root'
})
export class HistoryManagerService {

  private history: Array<BookIndex>;

  constructor() {
    this.initBookHistory();
  }


  public getHistory(): Array<BookIndex> {
    return this.history;
  }

  public addBookToHistory(book: BookIndex): boolean {
    return true;
  }

  public clearHistory(): boolean {
    return true;
  }

  private initBookHistory(): void {
    // change to local storage
    this.history = [];
  }

  private saveHistory(): void {
    // TODO ::
  }
}
