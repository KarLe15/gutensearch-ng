import {Component, Input, OnInit} from '@angular/core';
import {BookData} from '../../../models/BookData';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input('books')
  booksList$: Observable<BookData[]>;

  booksList: Array<BookData>;

  constructor() { }

  ngOnInit(): void {
    this.booksList$.subscribe(list => {
      console.log('list-elems', list);
      this.booksList = list;
    });
  }

}
