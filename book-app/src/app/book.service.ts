import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { AuthorGroup } from './author-group.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // URL of your API (JSON-Server or ASP.NET Core, etc.)
  private baseUrl = ' http://localhost:5170';

  constructor(private http: HttpClient) { }

  // ── CRUD: /books ───────────────────────────────────────────────────────────
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book);
  }

  updateBook(book: Book): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // ── Dashboard Endpoints ────────────────────────────────────────────────────
  getLatestBooks(count: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/latest/${count}`);
  }

  getOldestBooks(count: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/oldest/${count}`);
  }

  getAuthorGroups(): Observable<AuthorGroup[]> {
    return this.http.get<AuthorGroup[]>(`${this.baseUrl}/author-groups`);
  }
}
