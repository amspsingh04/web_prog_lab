function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.available = true;
}

const library = {
  books: [],

  addBook: function (title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
  },

  displayBooks: function () {
    console.log('Library Catalog:');
    this.books.forEach(book => {
      let availability = book.available ? 'Available' : 'Not Available';
      console.log(`Title: "${book.title}", Author: ${book.author}, Genre: ${book.genre}, Status: ${availability}`);
    });
  },

  borrowBook: function (title) {
    const book = this.books.find(book => book.title === title);
    if (!book) {
      console.log(`"${title}" does not exist in the library.`);
      return;
    }
    if (!book.available) {
      console.log(`"${title}" is currently not available for borrowing.`);
      return;
    }
    book.available = false;
    console.log(`"${title}" has been borrowed.`);
  },

  returnBook: function (title) {
    const book = this.books.find(book => book.title === title);
    if (!book) {
      console.log(`"${title}" does not exist in the library.`);
      return;
    }
    if (book.available) {
      console.log(`"${title}" is already available.`);
      return;
    }
    book.available = true;
    console.log(`"${title}" has been returned to the library.`);
  }
};

