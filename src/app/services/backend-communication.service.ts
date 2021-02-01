import { Injectable } from '@angular/core';
import {SearchRequest} from '../models/backend/requests/SearchRequest';
import {Observable, of} from 'rxjs';
import {SearchResponse} from '../models/backend/responses/SearchResponse';
import {HttpClient} from '@angular/common/http';
import {BookRequest} from '../models/backend/requests/BookRequest';
import {BookResponse} from '../models/backend/responses/BookResponse';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicationService {

  private baseURL = 'http://localhost:8080';
  constructor(
    private http: HttpClient,
  ) { }

  public getResponseForResearch(req: SearchRequest): Observable<SearchResponse> {
    // return this.http.request<SearchResponse>(
    //   'GET', `${this.baseURL}/v1/api/search`,
    //   {
    //     body: req,
    //   }
    // );
    const res: SearchResponse = {
      searchResponses : [
        {
          hash: 'kkksqslmjfn#', // ne pas utiliser
          book: {
            id: 1342,
            title: 'Pride and Prejudice',
            authors: [
              {
                last_name: 'Austen',
                first_name: 'Jane',
                authorBirth: '1775',
                authorDeath: '1817'
              }
            ],
            subjects: [
              'Courtship -- Fiction',
              'Domestic fiction',
              'England -- Fiction',
              'Love stories',
              'Sisters -- Fiction',
              'Social classes -- Fiction',
              'Young women -- Fiction'
            ],
            bookShelves: [
              'Best Books Ever Listings',
              'Harvard Classics'
            ],
            copyright: false,
            mediaType: 'Text',
            downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
            downloadCount: 57065
          },
          words: [
            {
              word: 'with',
              occurrence: 1024
            },
            {
              word: 'without',
              occurrence: 86
            }
          ],
          accuracy: 0.64
        },
        {
          hash: 'kkksqslmjfn#', // ne pas utiliser
          book: {
            id: 1342,
            title: 'Pride and Prejudice',
            authors: [
              {
                last_name: 'Austen',
                first_name: 'Jane',
                authorBirth: '1775',
                authorDeath: '1817'
              }
            ],
            subjects: [
              'Courtship -- Fiction',
              'Domestic fiction',
              'England -- Fiction',
              'Love stories',
              'Sisters -- Fiction',
              'Social classes -- Fiction',
              'Young women -- Fiction'
            ],
            bookShelves: [
              'Best Books Ever Listings',
              'Harvard Classics'
            ],
            copyright: false,
            mediaType: 'Text',
            downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
            downloadCount: 57065
          },
          words: [
            {
              word: 'with',
              occurrence: 1024
            },
            {
              word: 'without',
              occurrence: 86
            }
          ],
          accuracy: 0.64
        }
      ],
      suggestions: [

        {
          id: 1342,
          title: 'Pride and Prejudice',
          authors: [
            {
              last_name: 'Austen',
              first_name: 'Jane',
              authorBirth: '1775',
              authorDeath: '1817'
            }
          ],
          subjects: [
            'Courtship -- Fiction',
            'Domestic fiction',
            'England -- Fiction',
            'Love stories',
            'Sisters -- Fiction',
            'Social classes -- Fiction',
            'Young women -- Fiction'
          ],
          bookShelves: [
            'Best Books Ever Listings',
            'Harvard Classics'
          ],
          copyright: false,
          mediaType: 'Text',
          downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
          downloadCount: 57065
        },

      ]

    };
    return of(res);
  }

  public getBookDetails(req: BookRequest): Observable<BookResponse> {
    // return this.http.request<BookResponse>(
    //   'GET', `${this.baseURL}/v1/api/book`,
    //   {
    //     body: req
    //   }
    // );
    const res: BookResponse = {
      book:  {
        id: 1342,
        title: 'Pride and Prejudice',
        authors: [
          {
            last_name: 'Austen',
            first_name: 'Jane',
            authorBirth: '1775',
            authorDeath: '1817'
          }
        ],
        subjects: [
          'Courtship -- Fiction',
          'Domestic fiction',
          'England -- Fiction',
          'Love stories',
          'Sisters -- Fiction',
          'Social classes -- Fiction',
          'Young women -- Fiction'
        ],
        bookShelves: [
          'Best Books Ever Listings',
          'Harvard Classics'
        ],
        copyright: false,
        mediaType: 'Text',
        downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
        downloadCount: 57065
      },
      suggestions: [
        {
          id: 1342,
          title: 'Pride and Prejudice',
          authors: [
            {
              last_name: 'Austen',
              first_name: 'Jane',
              authorBirth: '1775',
              authorDeath: '1817'
            }
          ],
          subjects: [
            'Courtship -- Fiction',
            'Domestic fiction',
            'England -- Fiction',
            'Love stories',
            'Sisters -- Fiction',
            'Social classes -- Fiction',
            'Young women -- Fiction'
          ],
          bookShelves: [
            'Best Books Ever Listings',
            'Harvard Classics'
          ],
          copyright: false,
          mediaType: 'Text',
          downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
          downloadCount: 57065
        },{
          id: 1342,
          title: 'Pride and Prejudice',
          authors: [
            {
              last_name: 'Austen',
              first_name: 'Jane',
              authorBirth: '1775',
              authorDeath: '1817'
            }
          ],
          subjects: [
            'Courtship -- Fiction',
            'Domestic fiction',
            'England -- Fiction',
            'Love stories',
            'Sisters -- Fiction',
            'Social classes -- Fiction',
            'Young women -- Fiction'
          ],
          bookShelves: [
            'Best Books Ever Listings',
            'Harvard Classics'
          ],
          copyright: false,
          mediaType: 'Text',
          downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
          downloadCount: 57065
        },{
          id: 1342,
          title: 'Pride and Prejudice',
          authors: [
            {
              last_name: 'Austen',
              first_name: 'Jane',
              authorBirth: '1775',
              authorDeath: '1817'
            }
          ],
          subjects: [
            'Courtship -- Fiction',
            'Domestic fiction',
            'England -- Fiction',
            'Love stories',
            'Sisters -- Fiction',
            'Social classes -- Fiction',
            'Young women -- Fiction'
          ],
          bookShelves: [
            'Best Books Ever Listings',
            'Harvard Classics'
          ],
          copyright: false,
          mediaType: 'Text',
          downloadLink: 'https://www.gutenberg.org/files/1342/1342-0.txt',
          downloadCount: 57065
        },

      ]
    };
    return of(res);
  }
}
