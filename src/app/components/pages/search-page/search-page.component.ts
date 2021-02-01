import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchRequest} from '../../../models/backend/requests/SearchRequest';
import {Subject} from 'rxjs';
import {BackendCommunicationService} from '../../../services/backend-communication.service';
import {BookData} from '../../../models/BookData';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  // message from the search-bar
  searchChannel$: Subject<SearchRequest>;

  // message to the search-bar
  resultChangeChannel$: Subject<boolean>;

  // massage to the search-bar
  filterChannel$: Subject<string[]>;

  // message to the resultList
  resultChannel$: Subject<BookData[]>;

  // message to the suggestionList
  suggestionsChannel$: Subject<BookData[]>;

  constructor(
    private backend: BackendCommunicationService,
  ) {
    this.searchChannel$ = new Subject<SearchRequest>();
    this.resultChangeChannel$ = new Subject<boolean>();
    this.filterChannel$ = new Subject<string[]>();
    this.resultChannel$ = new Subject<BookData[]>();
    this.suggestionsChannel$ = new Subject<BookData[]>();
  }

  ngOnInit(): void {
    this.searchChannel$.asObservable().subscribe(data => {
      console.log('search-page', data);
      this.backend.getResponseForResearch(data).subscribe(resp => {
        console.log('resp backend', resp);
        const resultBooks = resp.searchResponses
          .sort((a, b) => {
            if (a.accuracy < b.accuracy) {
              return 1;
            } else if (a.accuracy > b.accuracy) {
              return -1;
            } else {
              return 0;
            }
          }).map(elem => elem.book);
        this.resultChannel$.next(resultBooks);
        this.resultChangeChannel$.next(true);
        this.suggestionsChannel$.next(resp.suggestions);
      });
    });
  }

  ngOnDestroy(): void {
    this.resultChangeChannel$.unsubscribe();
    this.filterChannel$.unsubscribe();
    this.resultChannel$.unsubscribe();
    this.suggestionsChannel$.unsubscribe();
  }

}
