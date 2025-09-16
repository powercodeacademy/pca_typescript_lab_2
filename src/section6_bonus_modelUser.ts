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
  id: number
  email: string
  username: string
  createdAt: string
  bio?: string
  avatarUrl?: string
}

const userProfile: UserProfile = {
  id: 5,
  email: 'string',
  username: 'string',
  createdAt: 'string',
  bio: 'string',
  avatarUrl: 'string'
}
