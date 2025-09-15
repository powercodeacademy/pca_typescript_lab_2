// BONUS TASK:
// Create a type alias called UserProfile with the following properties:
// - id: number
// - email: string
// - username: string
// - createdAt: string (ISO date string)
// - bio?: string (optional)
// - avatarUrl?: string (optional)
//
// Then, create a variable of type UserProfile called userProfile and assign it a valid object.

// Your code here 👇

type UserProfile = {
  id: number;
  email: string;
  username: string;
  createdAt: string;
  bio?: string;
  avatarUrl?: string;
};

let userProfile: UserProfile = {
  id: 8,
  email: `Scooby@gmail.com`,
  username: "Scooby Doo",
  createdAt: "2025-09-15",
  bio: "hello, world",
  avatarUrl: "https:happyday.com",
};
