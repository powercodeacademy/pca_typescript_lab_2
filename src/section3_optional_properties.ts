// Create a User type with optional displayName, then create two user objects

// Your code here 👇
type User = {
  id: number;
  email: string;
  displayName?: string
};

const userWithName: User = {
  id: 1,
  email: "test@test.com",
  displayName: "Bobert",
}

const userWithoutName: User = {
  id: 2,
  email: "test123@test.com",
};