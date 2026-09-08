// Create a User type with optional displayName, then create two user objects
type User = {
  id: number,
  email: string,
  displayName?: string
}
// Your code here 👇
const userWithoutName: User = {
  id: 1,
  email: "leemail@test.co"
}

const userWithName: User = {
  id: 2,
  email: "judie@cutie.com",
  displayName: "buckboarflen"
}