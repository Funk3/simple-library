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

const bookList = document.querySelector('.bookList')
const newElement = document.createElement("li")
//loop through array
// add each part of object to an element
// -create element
// -push item on to it
// -
//push object into document
//add document to dom
function displayBook(array) {
  for (let book of array) {
    const title = document.createTextNode(book.title)
    const author = document.createTextNode(book.author)
    const status = document.createTextNode(book.status)

    newElement.appendChild(title)
    newElement.appendChild(author)
    newElement.appendChild(status)
    bookList.appendChild(newElement)
  }
}


displayBook(myLibrary)