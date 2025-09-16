// TASK:
// Define an object variable called `book` with the following properties:
// - `title`: string
// - `author`: string
// - `pages`: number
//
// Example:
// {
//   title: "The Hobbit",
//   author: "J.R.R. Tolkien",
//   pages: 310
// }

// Below we defined an interface called "Book". You must use this as the type for your variable called book.
interface Book {
  title: string
  author: string
  pages: number
}

// Your code here 👇

let book: Book = {
  title: "Way of Kings",
  author: "Brandon Sanderson",
  pages: 1000,
}
