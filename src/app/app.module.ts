import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { AboutComponent } from './components/static/about/about.component';
import { NotFoundComponent } from './components/static/not-found/not-found.component';
import { CardEntryComponent } from './components/atoms/card-entry/card-entry.component';
import { CardListComponent } from './components/groups/card-list/card-list.component';
import { SearchBarComponent } from './components/atoms/search-bar/search-bar.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';
import { HistoryPageComponent } from './components/pages/history-page/history-page.component';
import {MaterialModule} from './material.module';
import {BackendCommunicationService} from './services/backend-communication.service';
import {HistoryManagerService} from './services/history-manager.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NotFoundComponent,
    CardEntryComponent,
    CardListComponent,
    SearchBarComponent,
    SearchPageComponent,
    BookPageComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    BackendCommunicationService,
    HistoryManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
