// Create a UserProfile type with required and optional properties

// Your code here 👇
type UserProfile = {
  id: number,
  username: string,
  email: string,
  createdAt: string,
  bio?: string,
  avatarUrl?: string,
}

const userProfile: UserProfile = {
  id: 1,
  username: "jane_doe",
  email: "jane@example.com",
  createdAt: "2024-01-01",
  bio: "TypeScript learner",
  avatarUrl: "https://example.com/avatar.jpg",
}
