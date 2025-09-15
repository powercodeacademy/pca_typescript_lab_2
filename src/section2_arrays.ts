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
  name: string;
  grade: number;
};

// Your code here 👇
const colors: string[] = ["Red", "Orange", "Yellow"];

const ages: number[] = [80, 34, 2];

const students: Student[] = [
  { name: "Jack", grade: 8 },
  { name: "Erin", grade: 3 },
];
