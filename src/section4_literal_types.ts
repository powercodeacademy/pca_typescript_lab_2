// TASK:
// Create a variable called loadingStatus that can only be one of the following string values:
// - "loading"
// - "success"
// - "error"
//
// Try assigning valid and invalid values to observe how TypeScript enforces literal types.

// Your code here 👇
const loadingStatus: "loading" | "success" | "error" = 'error'
