// TASK:
// Create a variable called loadingStatus that can only be one of the following string values:
// - "loading"
// - "success"
// - "error"
//
// Try assigning valid and invalid values to observe how TypeScript enforces literal types.

// Your code here

type loadingStatus = "loading" | "success" | "error";

let loadingStatus: "loading" | "success" | "error" = "success";
