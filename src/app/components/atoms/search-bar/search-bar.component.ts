import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SearchRequest} from '../../../models/backend/requests/SearchRequest';
import {Observable, Subject} from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Input('search-channel')
  searchChannel$: Subject<SearchRequest>;

  @Input('result-channel')
  resultChannel$: Observable<boolean>;

  @Input('filter-channel')
  filteredOption$: Observable<string[]>;

  canSearch: boolean;
  color: ThemePalette = 'accent';
  isRegex: boolean;
  myControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.canSearch = true;
    this.isRegex = false;
    this.resultChannel$.subscribe(res => {
      console.log('search-bar-change');
      this.canSearch = true;
    });
  }

  doSearch(e: MouseEvent, input: HTMLInputElement): void {
    e.preventDefault();
    if (input.value === '') {
      return;
    }
    console.log('search-bar', {
      isRegex: this.isRegex,
      query: input.value
    });
    this.searchChannel$.next({
      isRegex: this.isRegex,
      query: input.value
    });
    this.canSearch = false;
  }

  ngOnDestroy(): void {
    this.searchChannel$.unsubscribe();
  }

}
