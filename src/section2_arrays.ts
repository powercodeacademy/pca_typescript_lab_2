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
let colors: string[] = ['a', 'bb', 'c']

const ages: number[] = [1, 2, 3, 4]

const students: Student[] = [
  {
    name: 'string',
    grade: 3
  }
]
