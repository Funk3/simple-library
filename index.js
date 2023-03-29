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

class Book {
  constructor(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
  }
}

function addBookToLibrary(bookObject) {
  return myLibrary.push(bookObject);
}


//loop through array
//push object into document
//add document to dom
function displayBook(array) {
  for (let book of array) {
    console.log("book", book)

  }
}

displayBook(myLibrary)