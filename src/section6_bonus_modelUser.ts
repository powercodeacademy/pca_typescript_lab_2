// Create a UserProfile type with required and optional properties

// Your code here 👇
type UserProfile = {
  id: number
  username: string
  email: string
  createdAt: string
  bio?: string
  avatarUrl?: string
} 

let userProfile: UserProfile =  {
  id: 1, 
  username: "lizwilby",
  email: "lizwilby@gmail.com", 
  createdAt: "8 Sept 2026"
}
