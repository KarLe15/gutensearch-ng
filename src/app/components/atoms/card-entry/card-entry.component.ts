import {Component, Input, OnInit} from '@angular/core';
import {BookData} from '../../../models/BookData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-entry',
  templateUrl: './card-entry.component.html',
  styleUrls: ['./card-entry.component.scss']
})
export class CardEntryComponent implements OnInit {

  @Input('book')
  myBook: BookData;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public navigateToDetail(): void {
    this.router.navigate([`/book/${this.myBook.id}`]);
  }

}
