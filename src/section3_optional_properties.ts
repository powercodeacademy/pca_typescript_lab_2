// TASK:
// 1. Define a type (using type alias) for a `User` with the following properties:
//    - `id`: number
//    - `email`: string
//    - `displayName`?: string (optional)
//
// 2. Create two variables of type `User`:
//    - One user with a displayName called `userWithName`
//    - One user without a displayName called `userWithoutName`

// Your code here 👇

type User = {
  id: number
  email: string
  displayName?: string
}

const userWithName: User = {
  id: 2,
  email: "email@email.com",
  displayName: "userOne",
}

const userWithoutName: User = {
  id: 2,
  email: "email@email.com",
}
