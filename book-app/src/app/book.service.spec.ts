import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';
import { Book } from './book.model';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });

    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all books via GET', () => {
    const dummyBooks: Book[] = [
      { id: 1, title: 'A', author: 'X', isbn: '111', publicationDate: '2022-01-01' },
      { id: 2, title: 'B', author: 'Y', isbn: '222', publicationDate: '2021-05-05' }
    ];

    service.getBooks().subscribe(books => {
      expect(books.length).toBe(2);
      expect(books).toEqual(dummyBooks);
    });

    const req = httpMock.expectOne('http://localhost:3000/books');
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooks);
  });
});
