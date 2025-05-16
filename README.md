# Lab 2 — Objects, Arrays & Type Aliases (TypeScript)

Welcome to **Lab 2** of the TypeScript Labs! In this lab, you’ll deepen your understanding of TypeScript by working with objects, arrays, optional properties, literal types, and type aliases.

## 🏆 Learning Goals

* Define object shapes using TypeScript
* Work with typed arrays
* Use optional and required object properties
* Restrict values using literal types
* Create reusable type aliases
* (Bonus) Model real-world data like a user profile or shopping cart

## 🛠️ What to Do

* Open each file in the `src/` folder and complete the tasks listed in the comments
* Use the Mocha + Chai tests in the `test/` folder to verify your solutions
* You do not need to use `export` statements — the tests access your code using a sandboxed VM environment

## ✅ How to Run Tests

```bash
npm install
npm test"
```

## 🗂️ Lab Structure & Tasks

### 🔹 section1\_objects.ts

Define an object variable called `book` with the following properties:

* `title` (string)
* `author` (string)
* `pages` (number)

### 🔹 section2\_arrays.ts

Create the following arrays:

* An array of strings called `colors`
* An array of numbers called `ages`
* An array of objects called `students`, where each student has a `name` (string) and `grade` (number)

### 🔹 section3\_optional\_properties.ts

Define an object type for a `User` that includes:

* `id` (number)
* `email` (string)
* `displayName` (optional string)

Then, create two example users: one with a `displayName` and one without.

### 🔹 section4\_literal\_types.ts

Create a variable called `status` that can only be one of:

* "loading"
* "success"
* "error"

Try assigning valid and invalid values to test TypeScript's strictness.

### 🔹 section5\_type\_alias.ts

Create a type alias called `Product` with:

* `id` (number)
* `name` (string)
* `price` (number)

Then, create a variable of type `Product` and assign an example product to it.

### ⭐ Bonus Sections

#### 🔹 bonus\_modelUser.ts

Design a `UserProfile` type with:

* `id`, `email`, `username`, `createdAt` (all required)
* optional `bio` and `avatarUrl`

Create at least one valid `UserProfile` object.

#### 🔹 bonus\_shoppingCart.ts

Create a `CartItem` type with:

* `productId` (number)
* `name` (string)
* `quantity` (number)
* `price` (number)

Then, create an array of cart items and a function that calculates the total cost of the cart.

---

**Ready?** Open `src/section1_objects.ts` and begin building your TypeScript skills! 🚀
