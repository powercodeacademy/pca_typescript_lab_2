// Create a User type with optional displayName, then create two user objects

// Your code here 👇
type User = {
  id: number
  email: string
  displayName?: string
}

let userWithName: User = {
  id: 1,
  email: "liz@gmail.com",
  displayName: "Liz"
}

let userWithoutName: User = {
  id: 2, 
  email: "wilby@gmail.com"
}