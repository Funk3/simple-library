let myLibrary = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    status: "Read"
  },
  {
    title: 'Fellowship of the Rings',
    author: "J.R.R Tolkien",
    status: 'Not Read'
  },
  {
    title: 'Red Shirts',
    author: 'John Scalzi',
    status: 'Not Read'
  }
];

function Book() {
  // the constructor...
}

function addBookToLibrary(bookObject) {
  return myLibrary.push(bookObject);
}

function displayBook(array) {
}
