// Create a User type with optional displayName, then create two user objects

// Your code here 👇
type User = {
  id: number
  email: string
  displayName?: string
}
const userWithName: User = {
  id: 1,
  email: "alice@example.com",
  displayName: "Alice",
}
const userWithoutName: User = {
  id: 2,
  email: "bob@example.com",
}
