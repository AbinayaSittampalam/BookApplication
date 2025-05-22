import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5170/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
