import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoryPageComponent} from './components/pages/history-page/history-page.component';
import {BookPageComponent} from './components/pages/book-page/book-page.component';
import {NotFoundComponent} from './components/static/not-found/not-found.component';
import {SearchPageComponent} from './components/pages/search-page/search-page.component';
import {AboutComponent} from './components/static/about/about.component';

const routes: Routes = [
  {
    path: 'history',
    component: HistoryPageComponent
  },
  {
    path: 'book/:id',
    component: BookPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: SearchPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
