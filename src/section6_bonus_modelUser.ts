// Create a UserProfile type with required and optional properties

// Your code here 👇
type UserProfile = {
  id: number
  username: string
  email: string
  createdAt: string
  avatarUrl?: string
  bio?: string
}

const userProfile: UserProfile = {
  id: 1,
  username: "alice",
  email: "alice@example.com",
  createdAt: "2025-01-01",
};

