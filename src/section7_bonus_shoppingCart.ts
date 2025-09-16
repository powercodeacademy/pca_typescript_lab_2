// BONUS TASK:
// 1. Create a type alias called CartItem with the following properties:
//    - productId: number
//    - name: string
//    - quantity: number
//    - price: number
//
// 2. Create an array called cart that contains multiple CartItems.
//
// 3. Create a function called calculateTotal that:
//    - takes the cart array
//    - returns the total cost (sum of quantity × price for each item)

// Your code here 👇

type CartItem = {
  productId: number
  name: string
  quantity: number
  price: number
}

let cart: CartItem[] = [
  {
    productId: 2,
    name: "apple",
    quantity: 2,
    price: 0.99,
  },
  {
    productId: 4,
    name: "watermelon",
    quantity: 1,
    price: 5.99,
  },
]

function calculateTotal(cart: CartItem[]): number {
  let total = 0

  for (const item of cart) {
    total += item.quantity * item.price
  }
  return total
}
