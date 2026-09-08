// Create a UserProfile type with required and optional properties
type UserProfile = {
  id: number,
  email: string,
  username: string,
  createdAt: string,
  bio?: string,
  avatarUrl?: string,
  phoneNumber?: number
}
// Your code here 👇
const userProfile: UserProfile = {
  id: 1,
  email: "test@test.co",
  username: "testing",
  bio: "this is a test",
  createdAt: "01/01/2000"
}