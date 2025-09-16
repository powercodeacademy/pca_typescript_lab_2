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

const cart: CartItem[] = [
  {
    productId: 34,
    name: 'string',
    quantity: 383,
    price: 5
  },
  {
    productId: 345,
    name: 'strirtng',
    quantity: 38573,
    price: 534
  }
]

const calculateTotal = (cart: CartItem[]): number => {
  let total: number = 0
  cart.forEach((item) => (total += item.price * item.quantity))
  return total
}
