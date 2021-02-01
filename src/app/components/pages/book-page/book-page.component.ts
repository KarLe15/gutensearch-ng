import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookData} from '../../../models/BookData';
import {BackendCommunicationService} from '../../../services/backend-communication.service';
import {HistoryManagerService} from '../../../services/history-manager.service';
import {ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit, OnDestroy {

  book: BookData;
  suggestions$: Subject<BookData[]>;
  constructor(
    private route: ActivatedRoute,
    private backend: BackendCommunicationService,
    private history: HistoryManagerService,

  ) {
    this.suggestions$ = new ReplaySubject<BookData[]>();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ids = params.get('id');
      const id = parseInt(ids, 10);
      this.history.addBookToHistory({ id });
      this.backend.getBookDetails({ id }).subscribe(b => {
        console.log('book detail', b);
        this.book = b.book;
        this.suggestions$.next(b.suggestions);
      });
    });
  }

  ngOnDestroy(): void {
    this.suggestions$.unsubscribe();
  }

}
