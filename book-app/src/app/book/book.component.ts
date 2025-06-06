import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [];
  book: Book = this.initBook();

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  onSubmit() {
    if (this.book.id === 0) {
      this.bookService.addBook(this.book).subscribe(() => {
        this.loadBooks();
        this.book = this.initBook();
      });
    } else {
      this.bookService.updateBook(this.book).subscribe(() => {
        this.loadBooks();
        this.book = this.initBook();
      });
    }
  }

  editBook(book: Book) {
    this.book = { ...book };
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
  }

  private initBook(): Book {
    return { id: 0, title: '', author: '', isbn: '', publicationDate: '' };
  }
}
