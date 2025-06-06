import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  book: Book = this.initBook();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadAllBooks();
  }

  loadAllBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  onSubmit(): void {
    if (this.book.id === 0) {
      // New Book
      this.bookService.addBook(this.book).subscribe(() => {
        this.loadAllBooks();
        this.book = this.initBook();
      });
    } else {
      // Update existing
      this.bookService.updateBook(this.book).subscribe(() => {
        this.loadAllBooks();
        this.book = this.initBook();
      });
    }
  }

  editBook(b: Book): void {
    this.book = { ...b };
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadAllBooks();
    });
  }

  private initBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      isbn: '',
      publicationDate: new Date().toISOString().slice(0, 10) // default to today
    };
  }
}
