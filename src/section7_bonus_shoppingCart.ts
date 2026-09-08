// Create CartItem type, cart array, and calculateTotal function

// Your code here 👇
type CartItem = {
  productId: number
  name: string
  quantity: number
  price: number
}

const cart: CartItem[] = [
  { productId: 1, name: "Laptop", quantity: 2, price: 10.99 },
  { productId: 2, name: "Mouse", quantity: 1, price: 5.49 },
  { productId: 3, name: "Keyboard", quantity: 3, price: 2.99 },
]

function calculateTotal(cart: CartItem[]): number {
  let total = 0
  for (const item of cart) {
    total += item.quantity * item.price
  }
  return total
}