// TASK 1:
// Create an array of strings called `colors` with at least 3 color names.
//
// TASK 2:
// Create an array of numbers called `ages` with at least 3 values.
//
// TASK 3:
// Create an array of objects called `students`. Each student should have:
// - `name` (string)
// - `grade` (number)
//
// Example:
// { name: "Alice", grade: 92 }

// Below, we have defined the type Student. You must use that as part of the type of your student variable
type Student = {
  name: string
  grade: number
}

// Your code here 👇

const colors: string[] = ["gray", "black", "blue"]

const ages: number[] = [25, 40, 60]

const students: Student[] = [
  {name: "Bob", grade: 70},
  {name: "Linda", grade: 100},
  {name: "Gene", grade: 20},
]
