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

First, fork and clone the repository and let's set up your environment:

```bash
npm install
npm test
```

The tests will guide you through each concept. Don't worry if they fail initially—that's how you'll learn what TypeScript expects!

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

**Try it yourself:** Open `src/section1_objects.ts` and create a `book` variable that matches the `Book` interface. The interface is already defined for you—just add your object!

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

**Your turn:** In `src/section2_arrays.ts`, create three arrays:

- `colors` (array of strings)
- `ages` (array of numbers)
- `students` (array of objects with `name` and `grade`)

The `Student` type is already defined for you to use.

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

**Practice:** In `src/section3_optional_properties.ts`, create a `User` type with required `id` and `email`, plus an optional `displayName`. Then create two user objects—one with a display name and one without.

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

**Try it:** In `src/section4_literal_types.ts`, create a `loadingStatus` variable that can only be "loading", "success", or "error". Try assigning different values to see TypeScript's type checking in action!

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

**Your challenge:** In `src/section5_type_alias.ts`, create a `Product` type alias and use it to create an `exampleProduct` variable.

---

## Bonus: Real-World Modeling

Now that you understand the basics, let's model some real-world data structures. These bonus sections will help you see how TypeScript concepts work together in practical scenarios.

### User Profiles

In `src/section6_bonus_modelUser.ts`, you'll create a `UserProfile` type that models a typical user account. Think about what information a user profile might have—some required (like ID and email) and some optional (like bio or avatar).

### Shopping Cart

In `src/section7_bonus_shoppingCart.ts`, you'll build a shopping cart system. You'll need to:

- Define what a cart item looks like
- Create an array of cart items
- Write a function that calculates the total cost

This will combine everything you've learned: objects, arrays, type aliases, and functions.

---

## Ready to Start?

Open `src/section1_objects.ts` and begin! The tests will guide you through each concept. Remember: TypeScript is here to help you write better code by catching errors early. Embrace the red squiggly lines—they're your friends! 🚀

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
