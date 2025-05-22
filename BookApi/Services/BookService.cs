using System;
using System.Collections.Generic;
using BookApi.Models;

namespace BookApi.Services
{
    public class BookService
    {
        private static List<Book> _books = new();
        private static int _nextId = 1;

        public List<Book> GetAll() => _books;

        public Book? Get(int id) => _books.FirstOrDefault(b => b.Id == id);

        public void Add(Book book)
        {
            book.Id = _nextId++;
            _books.Add(book);
        }

        public void Update(Book updatedBook)
        {
            var book = _books.FirstOrDefault(b => b.Id == updatedBook.Id);
            if (book is not null)
            {
                book.Title = updatedBook.Title;
                book.Author = updatedBook.Author;
                book.ISBN = updatedBook.ISBN;
                book.PublicationDate = updatedBook.PublicationDate;
            }
        }

        public void Delete(int id)
        {
            var book = _books.FirstOrDefault(b => b.Id == id);
            if (book != null) _books.Remove(book);
        }
    }
}


