# TypeScript Lesson 2: Objects, Arrays & Type Aliases

Welcome to your second TypeScript lab! In the previous lesson, you learned about basic type annotations, type inference, and function typing. Now we're going to dive deeper into TypeScript by working with objects and arrays.

You already know how to work with objects and arrays. TypeScript takes these familiar concepts and adds something powerful: **type safety**. Instead of hoping your data has the right shape, TypeScript helps you define exactly what you expect.

Think of it like this: in JavaScript, you might create a user object and hope it has a `name` property. In TypeScript, you can tell the compiler "this object must have a `name` that's a string" and it will catch mistakes before your code even runs.

## Learning Objectives

By the end of this lab, you'll be comfortable with:

- Defining object shapes with TypeScript
- Working with typed arrays
- Using optional properties (when something might not exist)
- Creating literal types (restricting values to specific options)
- Building reusable type aliases
- Modeling real-world data structures

## Getting Started

First, clone this repository to your local machine and install the required dependencies:

```bash
npm install
npm test
```

You should see test output showing which tests are passing and failing. Don't worry if tests are failing initially - that's expected! You'll be implementing the code to make them pass.

---

## Objects: Defining Shape and Structure

In JavaScript, you might create an object like this:

```javascript
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
}
```

TypeScript lets you be explicit about what properties this object should have. You can define an **interface** (think of it as a blueprint) that describes the shape:

```typescript
interface Book {
  title: string
  author: string
  pages: number
}

const book: Book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
}
```

Notice the `: Book` after the variable name? That's a **type annotation** telling TypeScript "this variable must match the Book interface." If you try to assign an object missing any of these properties, TypeScript will give you an error.

### Practice: Object Type Annotations

**Your Task**: Open `src/section1_objects.ts` and complete the following:

1. Create a variable called `book` that matches the `Book` interface
2. Assign it an object with:
   - `title`: a string (your favorite book title)
   - `author`: a string (the author's name)
   - `pages`: a number (the page count)

**Hint**: The `Book` interface is already defined for you in the file. You just need to create a variable that follows this interface!

---

## Arrays: Collections with Type Safety

Arrays in TypeScript work similarly to JavaScript, but with added type information. You can specify what type of elements the array contains:

```typescript
// Array of strings
const colors: string[] = ["red", "blue", "green"]

// Array of numbers
const ages: number[] = [25, 30, 35]

// Array of objects (using a type we defined)
const students: Student[] = [
  { name: "Alice", grade: 92 },
  { name: "Bob", grade: 87 },
]
```

The syntax `string[]` means "an array where every element is a string." This prevents you from accidentally adding a number to your colors array or a string to your ages array.

### Practice: Typed Arrays

**Your Task**: Open `src/section2_arrays.ts` and create three arrays:

1. **`colors`**: An array of strings containing at least 3 color names
2. **`ages`**: An array of numbers containing at least 3 different ages
3. **`students`**: An array of objects that match the `Student` type (with `name` and `grade` properties)

**Hint**: The `Student` type is already defined for you. Each student object needs a `name` (string) and `grade` (number).

---

## Optional Properties: When Things Might Not Exist

Sometimes, not every property in an object is required. Maybe a user profile has an optional bio, or a product might not have a discount price. TypeScript handles this with the `?` operator:

```typescript
type User = {
  id: number
  email: string
  displayName?: string // The ? makes this optional
}

// Both of these are valid:
const userWithName: User = {
  id: 1,
  email: "alice@example.com",
  displayName: "Alice",
}

const userWithoutName: User = {
  id: 2,
  email: "bob@example.com",
  // displayName is missing, but that's okay!
}
```

The `?` tells TypeScript "this property might exist, or it might not." When you access `displayName`, TypeScript will remind you that it could be `undefined`.

### Practice: Optional Properties

**Your Task**: Open `src/section3_optional_properties.ts` and complete the following:

1. Create a `User` type with:

   - `id`: number (required)
   - `email`: string (required)
   - `displayName`: string (optional - use the `?` operator)

2. Create two user objects:
   - `userWithName`: A user that has all three properties
   - `userWithoutName`: A user that only has `id` and `email` (no `displayName`)

**Hint**: Use the `?` operator after `displayName` to make it optional. Both user objects should be valid!

---

## Literal Types: Restricting to Specific Values

Sometimes you want to limit a variable to only certain specific values. For example, a loading status can only be "loading", "success", or "error"—nothing else. TypeScript's literal types let you enforce this:

```typescript
let loadingStatus: "loading" | "success" | "error"

loadingStatus = "loading" // ✅ Valid
loadingStatus = "success" // ✅ Valid
loadingStatus = "error" // ✅ Valid
loadingStatus = "pending" // ❌ TypeScript error!
```

This is called a **union type**—the `|` means "or." So `loadingStatus` can be "loading" OR "success" OR "error", but nothing else.

### Practice: Literal Types

**Your Task**: Open `src/section4_literal_types.ts` and complete the following:

1. Create a `loadingStatus` variable that can only be "loading", "success", or "error"
2. Assign it the value "loading" initially
3. Try assigning different values to see TypeScript's type checking in action!

**Expected behavior**:

```typescript
loadingStatus = "success" // ✅ Valid
loadingStatus = "error" // ✅ Valid
// loadingStatus = "pending" // ❌ TypeScript error!
```

**Hint**: Use the union type syntax with `|` to separate the allowed values. Try assigning an invalid value like "pending" to see TypeScript catch the error!

---

## Type Aliases: Reusable Type Definitions

As your applications grow, you'll find yourself repeating the same type definitions. TypeScript's **type aliases** let you create reusable type definitions:

```typescript
type Product = {
  id: number
  name: string
  price: number
}

// Now you can use Product anywhere:
const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  price: 1999,
}

const phone: Product = {
  id: 2,
  name: "iPhone",
  price: 999,
}
```

Type aliases are especially useful when you have complex types that you use in multiple places. Instead of writing out the full type definition each time, you create it once and reuse it.

### Practice: Type Aliases

**Your Task**: Open `src/section5_type_alias.ts` and complete the following:

1. Create a `Product` type alias with:

   - `id`: number
   - `name`: string
   - `price`: number

2. Create an `exampleProduct` variable that uses this type alias

**Hint**: Use the `type` keyword to create your alias, then use it as a type annotation for your variable.

---

## Bonus: Real-World Modeling

Now that you understand the basics, let's model some real-world data structures. These bonus sections will help you see how TypeScript concepts work together in practical scenarios.

### User Profiles

**Your Task**: Open `src/section6_bonus_modelUser.ts` and create a `UserProfile` type that models a typical user account.

Think about what information a user profile might have:

- **Required properties**: ID, email, username
- **Optional properties**: bio, avatar URL, phone number

Create a `userProfile` variable that demonstrates both required and optional properties.

### Shopping Cart

**Your Task**: Open `src/section7_bonus_shoppingCart.ts` and build a shopping cart system:

1. Define a `CartItem` type with:

   - `id`: number
   - `name`: string
   - `price`: number
   - `quantity`: number

2. Create a `cartItems` array with at least 2 items

3. Write a `calculateTotal` function that:
   - Takes an array of `CartItem` objects
   - Returns the total cost (sum of price × quantity for each item)

**Expected behavior**:

```typescript
console.log(calculateTotal(cartItems)) // Should output 1049
```

This combines everything you've learned: objects, arrays, type aliases, and functions!

---

### Common Troubleshooting

**"Property 'x' does not exist on type 'y'"**

- Check that you've defined all required properties in your type
- Make sure property names match exactly (including spelling)

**"Type 'string' is not assignable to type 'number'"**

- Verify that your values match the expected types
- Check that you're using the right type annotation

**"Object is possibly 'undefined'"**

- This happens when accessing optional properties
- Use optional chaining (`user.displayName?.length`) or check if the property exists first

**Tests failing?**

- Make sure you're using explicit type annotations (the `: Type` syntax)
- Check that your variable names match what the tests expect
- Verify that your objects have all required properties
